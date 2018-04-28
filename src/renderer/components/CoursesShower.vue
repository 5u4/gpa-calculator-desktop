<template>
    <v-card flat class="my-2">
        <v-data-table :headers="headers" :items="courses" hide-actions no-data-text="No courses">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.course }}</td>
                <td>{{ props.item.grade }}</td>
                <td>{{ props.item.credit }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {text: 'Course', value: 'course', align: 'center'},
                {text: 'Grade', value: 'grade', align: 'center'},
                {text: 'Credit', value: 'credit', align: 'center'}
            ]
        }
    },
    computed: {
        courses() {
            return this.$store.getters.getCourses;
        }
    }
}
</script>

<style>

</style>
