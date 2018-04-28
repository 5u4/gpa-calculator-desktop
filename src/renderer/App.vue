<template>
    <div id="app">
        <v-app dark>
            <v-content>
                <v-container>
                    <v-slide-y-transition mode="out-in">
                        <router-view></router-view>
                    </v-slide-y-transition>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Material+Icons');
/* Global CSS */
#app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
