<template>
  <v-app>
      <v-container grid-list-xs fluid>
          <v-layout row wrap justify-center>
              <v-flex ma-2 v-for="episode in podcasts" :key="episode.id" xs12 sm6 md4 lg3 xl2>
                  <v-card>
                    <v-img :src="'../../public/assets/images/podcasts/podcast'+ episode.id +'.jpg'" height="200px" @mouseover="episode.show = true" @mouseout="episode.show = false">
                        <v-container fill-height fluid pa-0>
                            <v-layout fill-height row justify-start class="container-overlay">
                                <v-flex v-if="!episode.show" pa-2 xs12 flexbox text-xs-left>
                                    <span class="headline white--text" v-text="episode.title"></span>
                                </v-flex>
                                <v-flex v-if="episode.show" fill-height fill-width class="overlay" @click="playAudio('../../public/assets/songs/pod'+ episode.id + '.mp3')">
                                    <v-icon color="white" style="font-size: 42px;">{{ !playing ?  'fas fa-play' : 'fas fa-pause'}}</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-actions>
                        <span class="subheading">Monistorinhas: {{episode.id}}</span>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="episode.favorite = !episode.favorite">
                            <v-icon v-bind:class="{active: episode.favorite}">favorite</v-icon>
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
      audio: new Audio(),
      playing: false,
      podcasts: [
        {
          id: 5,
          title: "Esportes",
          show: false,
          favorite: false
        },
        {
          id: 4,
          title: "Fim do Mundo",
          show: false,
          favorite: false
        },
        {
          id: 3,
          title: "Pirataria",
          show: false,
          favorite: false
        },
        {
          id: 2,
          title: "Medo",
          show: false,
          favorite: false
        },
        {
          id: 1,
          title: "O início",
          show: false,
          favorite: false
        }
      ]
    };
  },
  methods: {
    playAudio: function(src) {
      if (!this.playing) {
        this.audio.src = src;
        this.audio.play();
        this.playing = true;
      } else {
        this.audio.pause();
        this.playing = false;
      }
    }
  }
};
</script>

<style>
.center-icon > div {
  padding-left: 5px;
}

.container-overlay {
  position: relative;
}

.overlay {
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

.active {
  color: #ed4956 !important;
}
</style>
