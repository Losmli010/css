<template>
  <div class="container">
    <h1>Pokedex</h1>
    <div id="poke-container" class="poke-container">
      <div
        v-for="(item, idx) in pokemons"
        :key="idx"
        class="pokemon"
        :style="{ 'background-color': item.backgroundColor }"
      >
        <div class="img-container">
          <img :src="item.img" alt="" />
        </div>
        <div class="info">
          <span class="number">#{{ item.id }}</span>
          <h3 class="name">{{ item.name }}</h3>
          <small class="type">
            Type:
            <span>{{ item.type }}</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
    }
  },
  mounted() {
    const pokemon_count = 150
    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5',
    }

    const main_types = Object.keys(colors)

    const fetchPokemons = async () => {
      for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
      }
    }

    const getPokemon = async (id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const res = await fetch(url)
      const data = await res.json()
      createPokemon(data)
    }

    const createPokemon = (pokemon) => {
      let poke = {}

      poke['name'] = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
      poke[
        'img'
      ] = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
      poke['id'] = pokemon.id.toString().padStart(3, '0')

      const poke_types = pokemon.types.map((type) => type.type.name)
      const type = main_types.find((type) => poke_types.indexOf(type) > -1)
      poke['type'] = type
      poke['backgroundColor'] = colors[type]

      this.pokemons.push(poke)
    }

    fetchPokemons()
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
}
.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.pokemon {
  margin: 10px;
  padding: 20px;
  text-align: center;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
}

.pokemon .img-container {
  width: 120px;
  height: 120px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  padding: 5px 10px;
  font-size: 0.8em;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>
