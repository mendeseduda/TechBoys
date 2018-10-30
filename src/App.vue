<template>
  <v-app>
    <v-container fluid>
      <v-layout row justify-space-between text-xs-center>
        <v-flex xs12>
          <span v-for="item in menu" :key="item">
            {{ item }}
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>

</style>


<script>
  export default {
    data () {
      return {
        menu: [
            "Home",
            "Canal",
            "Encontro",
            "Juspananimals",
            "Lendas Urbanas",
            "Luk",
            "Podcast",
            "Reviews",
            "Sobre Nós"
        ]
      }
    }
  }
</script>
