<template>
  <div ref="threeNode" />
</template>

<script>
import { onMounted, ref, defineComponent } from 'vue'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

export default defineComponent({
  setup() {
    const threeNode = ref(null)

    onMounted(() => {
      init()
    })

    // init
    const init = () => {
      // init scene
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xffffff)

      // 坐标轴
      const axesHelper = new THREE.AxesHelper(100)
      scene.add(axesHelper)

      // 水平网格
      // const gridHelper = new THREE.GridHelper(100, 100)
      // scene.add(gridHelper)

      // 极坐标
      // const polarHelper = new THREE.PolarGridHelper( 48, 16, 32, 64 );
      // scene.add( polarHelper );

      // init camera
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      camera.position.z = 200

      // 渲染器
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      threeNode.value.appendChild(renderer.domElement)

      // fps统计面板
      const stats = new Stats()
      threeNode.value.appendChild(stats.dom)

      // 鼠标控制
      const controls = new TrackballControls(camera, renderer.domElement)
      controls.rotateSpeed = 1.0
      controls.zoomSpeed = 1.2
      controls.panSpeed = 0.8
      controls.keys = ['KeyA', 'KeyS', 'KeyD']

      // 动画
      animate()

      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        stats.update()
        renderer.render(scene, camera)
      }

      const length = 20
      const width = 2
      const height = 2
      const x = 0
      const y = 0
      const z = 0
      for (let i = 0; i < 6; i++) {
        addBox([length, width, height], [x - 20, -10 + i * 4, z])
      }

      for (let i = 0; i < 12; i++) {
        let xx = x
        let yy = y
        if (i % 2 == 0) {
          xx = x + 20
          yy = -10 + i * 2
        } else {
          xx = x + 20 + 12
          yy = -10 + (i - 1) * 2
        }
        addBox([length / 2 - 1, width, height], [xx, yy, z])
      }

      function addBox(size, position) {
        const geometry = new THREE.BoxGeometry(...size)
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(...position)
        scene.add(mesh)
      }

      for (let i = 0; i < 6; i++) {
        generate(Math.floor(Math.random() * 10) > 5, i)
      }

      function generate(isSun, index) {
        if (isSun) {
          addBox([length, width, height], [x - 60, -10 + index * 4, z])
        } else {
          addBox([length / 2 - 1, width, height], [x - 66, -10 + index * 4, z])
          addBox(
            [length / 2 - 1, width, height],
            [x - 66 + 12, -10 + index * 4, z]
          )
        }
      }
    }
    return { threeNode }
  },
})
</script>
