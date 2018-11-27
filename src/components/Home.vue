<style>
.titulo{
    text-align: center;
    text-shadow: 1px 0px #ffa000;
}

p{

    text-align: justify;
    padding-left:2em;
    padding-right:2em;
}
</style>

<template>

    <v-layout row wrap fill-height>

        <v-container mt-5 grid-list-xs>
            
            <v-layout row justify-center>
                            <v-flex xs12 sm12 md12 xl8>
                                <div class="display-4 titulo" align-center>Tech Boys</div>
                                <br><br>
                            </v-flex>
                    </v-layout>
                    <v-card>
            <v-layout row justify-center>
                <v-flex xs12 sm12 md12 xl8>
                    <v-carousel hide-controls> 
                        <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src" @click="goTo(item.path)"
                        ></v-carousel-item>
                    </v-carousel>
                    <v-card-text class="display-1">
                        <br><br>
                         <p> &emsp;O Tech Boys são uma organização limitada sem fins lucrativos que visa compartilhar todo o 
                             conteúdo criado pelos membros de forma que beneficie os próprios membros.</p>
                        <p>
                            &emsp; O que você está prestes a ver é uma pequena coletânea contendo parte de todo o trabalho que foi
                             acumulado até então. 
                        </p>
                        <p>
                            &emsp;Vale lembrar que cada forma de apresentação é ainda um protótipo, e não possui nenhum compromisso com a versão. 
                        </p>
                         
                    </v-card-text>
                </v-flex>
            </v-layout>
            </v-card>
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
