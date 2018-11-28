<template>
    <v-layout row wrap fill-height :style="{ backgroundColor: this.$vuetify.theme.accent }">
        <v-container mt-5 grid-list-xs>
            <v-layout column>
                
                <v-flex py-2>
                        <v-card style="border-radius: 140px 140px 140px 140px / 140px 140px 140px 140px;" class="pa-2">
                            <v-layout row align-center reverse>
                                <v-flex xs3 align-content-space-around>
                                        <v-card style="border-radius:50%;" fluid>
                                            <v-img   
                                            src='../../public/assets/images/musastranho.jpg'>
                                            </v-img>        
                                        </v-card>
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text class="tentativa">
                                        <h1 class="text-md-center display-2">Juliana que bica</h1>
                                        <v-card-text style="text-align: center;" class="display-1">
                                           Vinda dos céus em busca de afeto, esta foi a primeira forma a se manisfestar..
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
                <v-flex py-2>
                        <v-card style="border-radius:  140px 140px 140px 140px /  140px 140px 140px 140px;" class="pa-2">
                            <v-layout row align-center >
                                <v-flex xs3 align-content-space-around>
                                        <v-card style="border-radius:50%;" fluid>
                                            <v-img   
                                            src='../../public/assets/images/musastranho.jpg'>
                                            </v-img>        
                                        </v-card>
                                </v-flex >
                                <v-flex xs8 >
                                    <v-card-text>
                                        <h1 class="text-md-center">Julharanho</h1>
                                        <v-card-text style="text-align: justify;">
                                           
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
                                           
                                        </v-card-text>
                                    </v-card-text>

                                </v-flex>
                            </v-layout>
                        </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
export default{
    name: "Julianimals"
}
</script>