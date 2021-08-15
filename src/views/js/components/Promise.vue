<template>
    <div>
        <h3>Promise</h3>
        <p>
            <a href="https://github.com/xieranmaya/blog/issues/3" target="_blank">
                剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类
            </a>
        </p>
        <ul>
            <li>Promise 是一个承诺，只可能是成功、失败、无响应三种情况之一，一旦决策，无法修改结果。</li>
        </ul>

        <h3>Promise Error</h3>
        <p>
            <a href="https://juejin.cn/post/6844903462002491399" target="_blank">
                Callback Promise Generator Async-Await 和异常处理的演进
            </a>
        </p>
        <ul>
            <li>在回调函数中直接处理了异常，是最不明智的选择。<button @click="cb" class="btn">回调</button></li>
            <li>不仅是 reject，抛出的异常也会被作为拒绝状态被 Promise 捕获。<button @click="handlePromiseError" class="btn">Promise 异常处理</button></li>
            <li>永远不要在 tasks 队列中抛出异常，因为 tasks 队列脱离了运行上下文环境，异常无法被当前作用域捕获。<button @click="cannotHandleError" class="btn">Promise 无法捕获的异常</button></li>
            <li>只要注意在 tasks 级别回调中使用 reject，就没有抓不住的异常。<button @click="canHandleError" class="btn">Promise 捕获第三方异常</button></li>
        </ul>

        <h3>Async Await Error</h3>
        <ul>
            <li>使用 try catch 捕获异常。<button @click="catchError" class="btn">Async Await 捕获异常</button></li>
            <li>不仅是 reject，抛出的异常也会被作为拒绝状态被 Promise 捕获。<button @click="cannotCatchError" class="btn"> Async Await 无法捕获的异常</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        cb() {
            const fetch = (callback) => {
                setTimeout(() => {
                    console.log('请求失败')
                    // callback()   // callback函数没有被调用执行
                })
            }

            fetch(() => {
                console.log('请求处理') // 永远不会执行
            })
        },
        handlePromiseError() {
            const promiseF = new Promise((resolve, reject) => {
                resolve('ok')
            })
            promiseF.then(result => {
                return Promise.reject('error1')
            }).then(result => {
                console.log(result) // 永远不会执行
                return Promise.resolve('ok1') // 永远不会执行
            }).then(result => {
                console.log(result) // 永远不会执行
            }).catch(error => {
                console.log(error) // error1
            })


            const fetch = (callback) => {
                return new Promise((resolve, reject) => {
                    throw Error('用户不存在')
                })
            }

            fetch().then(result => {
                console.log('请求处理', result) // 永远不会执行
            }).catch(error => {
                console.log('请求处理异常', error) // 请求处理异常 用户不存在
            })
        },
        cannotHandleError() {
            const fetch = (callback) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                         throw Error('用户不存在')
                    })
                })
            }

            fetch().then(result => {
                console.log('请求处理', result) // 永远不会执行
            }).catch(error => {
                console.log('请求处理异常', error) // 永远不会执行
            })

            // 程序崩溃
            // Uncaught Error: 用户不存在
        },
        canHandleError() {
            const fetch = (callback) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                         reject(new Error('收敛一些'))
                    })
                })
            }

            fetch().then(result => {
                console.log('请求处理', result) // 永远不会执行
            }).catch(error => {
                console.log('捕获异常', error) // 捕获异常 收敛一些
            })
        },
        catchError() {
            const fetch = (callback) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject('no')
                    })
                })
            }

            const main = async () => {
                try {
                    const result = await fetch()
                    console.log('请求处理', result) // 永远不会执行
                } catch (error) {
                    console.log('异常', error) // 异常 no
                }
            }

            main()
        },
        cannotCatchError() {
            const thirdFunction = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // throw Error('就是任性')
                        reject('收敛一些')
                    })
                })
            }

            const main = async () => {
                try {
                    const result = await thirdFunction()
                    console.log('请求处理', result) // 永远不会执行
                } catch (error) {
                    console.log('异常', error) // 异常 收敛一些
                }
            }

            main()
        }
    }
}
</script>