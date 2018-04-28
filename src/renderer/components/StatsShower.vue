<template>
    <v-card flat class="my-2">
        <v-card-text>
            GPA: {{gpa}}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    computed: {
        gpa() {
            return this.$store.getters.getAverageGrade;
        }
    }
}
</script>

<style>

</style>
