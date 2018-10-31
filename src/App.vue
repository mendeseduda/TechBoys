<template>
  <v-app>
    <v-container fluid text-xs-center>
      <v-layout row justify-space-between text-xs-center>
        <v-flex xs12>
          <!-- Obrigado vianinha -->
          <v-btn flat v-for="item in menu" :key="item" @click="goTo(item.path)">
            {{ item.name }}  
          </v-btn>  
        </v-flex>
      </v-layout>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<style>
</style>


<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          path: ""
        },
        {
          name: "Canal",
          path: ""
        },
        {
          name: "Encontro",
          path: ""
        },
        {
          name: "Julianimals",
          path: ""
        },
        {
          name: "Lendas Urbanas",
          path: ""
        },
        {
          name: "Luk",
          path: ""
        },
        {
          name: "Podcast",
          path: "Podcasts"
        },
        {
          name: "Reviews",
          path: ""
        },
        {
          name: "Sobre Nós",
          path: ""
        }
      ]
    };
  },
  methods: {
    goTo: function(path) {
      this.$router.push({name: path})
    }
  }
};
</script>
