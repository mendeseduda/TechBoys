<template>
    <v-layout row wrap fill-height>
        <v-container mt-5 grid-list-xs>
            <v-layout row justify-center>
                <v-flex xs12 sm12 md12 xl8>
                    <v-carousel hide-controls> 
                        <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src" @click="goTo(item.path)"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
import goTo from '../router/goTo';

export default {
  name: "Home", 
  data() {
      return {
          items: [
              {
                  src: '../../public/assets/images/maia.jpg',
                  path: "Podcasts"
              },
              {
                  src: '../../public/assets/images/john.jpg'
              },
              {
                  src: '../../public/assets/images/musaranho.jpg'
              }
          ]
      };
  },
  methods: {
      goTo: goTo
  }
};
</script>

<style>
</style>
