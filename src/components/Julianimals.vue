<style>

.titulo{
    text-shadow: 2px 3px #9E9E9E;
}

.cards{

    border-radius: 140px 140px 140px 140px / 140px 140px 140px 140px;
}

.juliana{
    border-radius: 50%;
    height: 280px;
    width: 280px;

}

.text{
    text-align: center; color:#424242;
    
}



</style>


<template>
<v-container fluid >
    <v-layout row wrap fill-height  :style="{ backgroundColor: this.$vuetify.theme.accent }">
        <v-container mt-5 grid-list-xs>
            <v-layout column>
                
                <v-flex py-2>
                        <v-card class="pa-2 cards" >
                            <v-layout row wrap align-center reverse>
                                <v-flex xs12 md3 align-content-space-around>
                                            
                                            <v-img  class="juliana"
                                              src='../../public/assets/gifs/juliana-bica.gif'>
                                            </v-img>  
                                </v-flex >
                                <v-flex md8 xs12 >
                                    <v-card-text>

                                        <div class=" titulo text-md-center display-2">Juliana que bica</div>
                                        <v-card-text  class="display-1 text">
                                           Vinda dos céus em busca de afeto, esta foi a primeira forma a se manisfestar.
                                           
                                        </v-card-text>  
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
                <v-flex py-2>
                        <v-card class="pa-2 cards">
                            <v-layout row align-center >
                                <v-flex xs3 align-content-space-around>
                                            <v-img  
                                            class="juliana" 
                                            src='../../public/assets/gifs/juliana-leao.gif'>
                                            </v-img>        
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text>
                                        <h1 class="text-md-center display-2 titulo">Juliana's roar</h1>
                                        <v-card-text class="display-1 text">
                                           Seu rugido majestoso capaz de elevar montanhas que nos encanta desde os tempos de 213.
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
                <v-flex py-2>
                        <v-card class="pa-2 cards">
                            <v-layout row align-center reverse>
                                <v-flex xs3 align-content-space-around>
                                            <v-img  
                                            class="juliana" 
                                            src='../../public/assets/images/juliana-pato.jpeg'>
                                            </v-img>        
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text>
                                        <h1 class="text-md-center display-2 titulo">Pato Ju</h1>
                                        <v-card-text class="display-1 text">
                                           Polivalente: é capaz de nadar, voar e andar. Além de ser muito simpatica.
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
                 <v-flex py-2>
                        <v-card class="pa-2 cards">
                            <v-layout row align-center>
                                <v-flex xs3 align-content-space-around>
                                            <v-img  
                                            class="juliana" 
                                            src='../../public/assets/gifs/juliana-baiacu.gif'>
                                            </v-img>        
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text>
                                        <h1 class="text-md-center display-2 titulo">Juliana Baiacu</h1>
                                        <v-card-text class="display-1 text">
                                           Quando se sente ameaçada, este se enche de ar, encantando qualquer predador com suas bochechas. Comuns na fauna fluvial da América do Sul
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
                <v-flex py-2>
                        <v-card class="pa-2 cards">
                            <v-layout row align-center reverse>
                                <v-flex xs3 align-content-space-around>
                                            <v-img  
                                            class="juliana" 
                                            src='../../public/assets/images/juliana-poico.jpeg'>
                                            </v-img>        
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text>
                                        <h1 class="text-md-center display-2 titulo">Juliana Poico</h1>
                                        <v-card-text class="display-1 text">
                                           Oinc oinc
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
    </v-container>
</template>

<script>
export default{
    name: "Julianimals",
    data(){
        return{
            coluna: false,
            widthTela: 0
        }
    }, 
    created: function (){
        window.onresize = function () {
            console.log('aaa');
            
            this.widthTela = window.innerWidth;
            if (window.innerWidth  <=500)
                this.coluna = true;
                else
                this.coluna = false;

        }
    }
}
</script>