<template>
    <v-layout row wrap fill-height :style="{ backgroundColor: this.$vuetify.theme.accent }">
        <v-container mt-5 grid-list-xs>
            <v-layout row justify-center>
                <v-flex xs12 sm12 md12 xl8>
                        <v-card fill-height>
                            <v-layout row>
                                <v-flex xs6>
                                    
                                            <v-img
                                            class="white--text"
                                            width="300"
                                            src='../../public/assets/images/musastranho.jpg'>
                                            </v-img>
                                        
                                </v-flex>
                                <v-flex>
                                    <v-card-title>
                                        <span class="gray--text" align-center>AAAAA</span>
                                    </v-card-title>
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