<template>
  <v-app>
    <v-container pa-0 fluid text-xs-center>
      <v-layout row wrap>
        <div class="bg-top">
          <div class="blackboard hidden-xs-only">
            <div class="blackboard-text text-xs-center">{{daysUntil()}}</div>
          </div>
        </div>
      </v-layout>
      <v-layout row class="toolbar">
        <v-toolbar class="toolbar-items-center" color="primary">
          <v-toolbar-items class="hidden-sm-and-down">
            <!-- Obrigado vianinha -->
            <div class="nav-btn" v-for="item in menu" :key="item" @click="goTo(item.path)" @mouseover="incrementWidth()">
                <div>
                  {{ item.name }}
                <div class="nav-effect"></div> 
              </div> 
            </div>  
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>
      <router-view :style="{ backgroundColor: this.$vuetify.theme.accent }"></router-view>
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
  width: 210px;
  height: 210px;
}

.blackboard-text {
  transform: rotate(-2deg);
  font-family: cholk;
  color: white;
  font-size: 18px;
  user-select: none;
  padding-top: 58px;
  padding-bottom: 20px;
  padding-left: 9px;
  padding-right: 9px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
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

.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  padding: 0 10px;
  font-size: 16px;
}

.nav-effect {
  display: block;
  background-color: white;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  -webkit-transition: all 0.4 ease;
  transition: all 0.4s ease;
}

.nav-btn:hover .nav-effect {
  transform: scaleX(1);
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
          name: "Luk Pics",
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
    },
    daysUntil: () => {
      let today = new Date();
      const year = today.getFullYear();
      const day = 1000 * 60 * 60 * 24;
      let christmas = new Date(year, 11, 25);
      if (today.getMonth() == 11 && today.getDate() >= 25)
        christmas.setFullYear(year + 1);
      const result = Math.round(
        Math.abs(today.getTime() - christmas.getTime()) / day
      );
      if (result == 365) return "FELIZ NATAL!";
      return result + (result > 1 ? " dias " : " dia ") + "até o natal!";
    }
  }
};
</script>
