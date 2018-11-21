<template>
  <v-app>
      <v-container grid-list-xs fluid>
          <v-layout row wrap justify-center>
              <v-flex ma-2 v-for="episode in podcasts" :key="episode.id" xs12 sm6 md4 lg3 xl2>
                  <v-card>
                    <v-img :src="episode.image" height="200px" @mouseover="episode.show = true" @mouseout="episode.show = false">
                        <v-container fill-height fluid pa-0>
                            <v-layout fill-height row justify-start class="container-overlay">
                                <v-flex pa-2 xs12 flexbox text-xs-left>
                                    <span class="headline white--text" v-text="episode.title"></span>
                                </v-flex>
                                <v-flex v-if="episode.show" fill-height fill-width class="overlay">
                                    <v-icon color="white" style="font-size: 42px;">fas fa-play</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>share</v-icon>
                        </v-btn>
                    </v-card-actions>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Podcasts",
  data() {
    return {
      podcasts: [
        {
          id: 1,
          title: "Esportes",
          image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          src: "",
          show: false
        },
        {
          id: 2,
          title: "Fim do Mundo",
          image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          src: "",
          show: false
        },
        {
          id: 3,
          title: "Pirataria",
          image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          src: "",
          show: false
        },
        {
          id: 4,
          title: "Pirataria",
          image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          src: "",
          show: false
        },
        {
          id: 5,
          title: "Pirataria",
          image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          src: "",
          show: false
        }
      ],
    };
  }
};
</script>

<style>
.center-icon > div {
  padding-left: 5px;
}

.container-overlay{
    position: relative;
}

.overlay{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 85, 0, 0.86);   
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

</style>
