<template>
    <v-app>
        <v-container grid-list-xs>
            <v-layout column align-center wrap justify-center>
                <v-flex ma-3>
                    <v-img width="450px" src="../../public/assets/images/arcade-font.png"></v-img>
                </v-flex>
                <div style="max-width: 600px">
                    <v-layout justify-center row wrap mt-3 class="round-border">
                        <div v-for="member in members" :key="member" class="effect">
                            <v-img position="0 center" width="150px" height="150px" :src="'../../public/assets/images/techboys/' + member.name + '.jpg'">
                                <div class="overlay-effect">
                                    <div class="overlay-item white--text subheading break-word">
                                        <div>{{member.name}}</div>
                                        <div class="description">
                                            {{member.description}}
                                        </div>
                                    </div>
                                </div>
                            </v-img>
                        </div>
                    </v-layout>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      members: [
        {
          name: "John",
          description: "Estranho"
        },
        {
          name: "Maia",
          description: "Matemático Padrão"
        },
        {
          name: "Ferreira",
          description: "Fede"
        },
        {
          name: "Eduardo",
          description: "Deus do Front-End"
        },
        {
          name: "Juliana",
          description: "Um Amor"
        },
        {
          name: "Matheus",
          description: "Namorado da Carine"
        },
        {
          name: "Motta",
          description: "Menino Engenheiro"
        },
        {
          name: "Pepe",
          description: "Rico"
        },
        {
          name: "Roberto",
          description: "Corno"
        },
        {
          name: "Hugo",
          description: "Talentoso"
        },
        {
          name: "Mochi",
          description: "Desenvolvedor Sênior"
        },
        {
          name: "Livia",
          description: "GOD"
        }
      ]
    };
  }
};
</script>

<style>
.effect:hover, .effect:hover > *{
    transform: scale(1.01);
    z-index: 2;
    transition: all .2s;
    box-shadow: 0 0 30px #FFA000;
}

.overlay-effect{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
}

.overlay-item{
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    transform: translateY(100px);
    transition: all .2s;
}

.effect:hover .overlay-item{
    transform: translateY(0);
} 

.break-word{
    word-break: break-word;
}

.description{
    color: #ffffffbf;
    font-size: 14px;
}

</style>

