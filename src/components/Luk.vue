<template>
    <v-container fluid grid-list-xs>
        <v-layout v-if="show" row wrap justify-start>
            <v-btn icon @click="back()">
                <v-icon>fas fa-arrow-left</v-icon>
            </v-btn>
        </v-layout>        
        <v-layout mb-5 justify-center row wrap class="limit">
            <v-img v-if="show" contain :src="image" height="500px"></v-img>
            <div v-if="!show" style="max-width: 1200px;">
                <v-layout row wrap justify-center>
                    <v-flex v-for="i in 16" :key="i" xs3 @click="showImage('../../public/assets/images/luk/luk' + i + '.jpg')" style="cursor: pointer;">
                        <img :src="'../../public/assets/images/luk/luk' + i + '.jpg'" class="image" width="100%" height="100%">
                    </v-flex>
                </v-layout>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Luk",
  data() {
    return {
      show: false,
      image: null
    };
  },
  methods: {
    showImage: function(img) {
      this.image = img;
      this.show = true;
    },
    back: function () {
        this.show = false;
      }
  }
};
</script>

<style>
</style>
