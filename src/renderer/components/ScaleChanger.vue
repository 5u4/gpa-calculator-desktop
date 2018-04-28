<template>
    <v-card flat class="my-2">
        <v-tabs fixed-tabs height="35px">
            <v-tab @click="changeScale(4.33)">
                4.33
            </v-tab>
            <v-tab @click="changeScale(4.00)">
                4.00
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
export default {
    methods: {
        changeScale(scale) {
            this.$store.commit('changeScale', scale)
        }
    }
}
</script>

<style>

</style>
