<style>
.texto{

    text-align: justify;
    font-size: 20px;

}
.imagem{
border-radius: 50%;
height: 100%;
}
.cardas{
    border-radius: 141px 0px 0px 141px / 110px 0px 0px 110px;
}
</style>

<template>
        <v-container fluid>
            <v-layout row wrap fill-height  :style="{ backgroundColor: this.$vuetify.theme.accent }">
                <v-container mt-5 grid-list-xs>               
                    <v-layout row>
                        

                                        <v-flex py-2>
                        <v-card class="cardas" >
                            <v-layout row wrap align-center>
                                <v-flex xs12 md3 align-content-space-around>
                                            
                                            <v-img class="imagem"
                                            fill-height
                                              src='./../public/assets/images/JohnMapa.jpg'>
                                            </v-img>  
                                </v-flex >
                                <v-flex md8 xs12 >
                                    <v-card-text>

                                        <div class=" titulo text-md-center display-2">John Schmitz</div>
                                        <v-card-text  class="texto">
                                           Um de nossos membros também é conhecido por dirigir um canal no Youtube, onde é possível encontrar
                                    unboxing de diversos produtos e com as melhores companhias possíveis além de gameplays de primeira 
                                    qualidade de Magic: The Gathering.<br>
                                    <a href="https://www.youtube.com/channel/UCJ9E07G0qo0jd4meZtz39HQ" onclick="color:purple"> Canal do John</a>
                                    
                                        </v-card-text>  
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex> 
            </v-layout>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs5>
                                        <v-card>
                                            <v-img src='./../public/assets/images/magic.png'></v-img>
                                                <v-card-text class="texto">
                                                    <p>
                                                        O conteúdo de Magic aborda desde gameplays no Magic Online (MOL), quanto no Magic: The Gathering 
                                                        Arena (MTGA). Atrvés dos quais apresenta drafts e selados, torneios pauper e pennydreadful, formato
                                                         onde também apresenta as regras.
                                                    </p>
                                                </v-card-text>
                                        </v-card>
                                </v-flex>
            
                                <v-flex xs5 align-center>
                                    <v-card>
                                            <v-img src='./../public/assets/images/unboxing.png'></v-img>
                                                <v-card-text class="texto">
                                                    <p>
                                                        O conteúdo dedicado aos unboxings se valhe dos mais variados tipos de produtos como alvo. Entre os produtos
                                                        é possível encontrar doces, nuggets, caçulinhas e até mesmo água com gás.
                                                        Há também episódios especiais que contam com a participação de alguns ilustres convidados.
                                                    </p>
                                                </v-card-text>
                                        </v-card>
                                    </v-flex>
                    </v-layout>
                    
                </v-container>
            </v-layout>    
        </v-container>        
    
</template>

<script>
export default{
    name: "Canal"
}
</script>