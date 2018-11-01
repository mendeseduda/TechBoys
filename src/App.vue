<template>
  <v-app>
    <v-container pa-0 fluid text-xs-center>
      <v-layout row wrap>
        <div class="bg-top">
          <div class="blackboard">
            <div class="blackboard-text">55 dias até o natal!</div>
          </div>
        </div>
      </v-layout>
      <v-layout row class="toolbar">
        <v-toolbar class="toolbar-items-center">
          <v-toolbar-items class="hidden-sm-and-down">
            <!-- Obrigado vianinha -->
            <v-btn ma-0 flat v-for="item in menu" :key="item" @click="goTo(item.path)">
              {{ item.name }}  
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<style>
.bg-top {
  width: 100%;
  background: url("../public/assets/images/ceia.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 260px;
  background-position-y: -120px;
  position: relative;
  z-index: 1;
}

.blackboard {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-image: url("../public/assets/images/blackboard.png");
  background-size: contain;
  z-index: 2;
  width: 180px;
  height: 180px;
}

.blackboard-text {
  transform: rotate(-2deg);
  font-family: cholk;
  color: white;
  margin-top: 68px;
  padding: 15px;
  font-size: 18px;
  user-select: none;
}

.toolbar {
  z-index: 100;
  position: sticky;
  top: 0;
  background-color: white;
}

.toolbar-items-center > div {
  justify-content: center !important;
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          path: "Home"
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
      this.$router.push({ name: path });
    }
  }
};
</script>
