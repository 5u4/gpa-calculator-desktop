<template>
    <v-container>
        <v-layout column>
            <!-- Logo -->
            <v-flex>
                <logo></logo>
            </v-flex>
            <!-- Scale Changer -->
            <v-flex>
                <scale-changer></scale-changer>
            </v-flex>
            <!-- Stats Shower -->
            <v-flex>
                <stats-shower></stats-shower>
            </v-flex>
            <!-- Course Adder -->
            <v-flex>
                <course-adder></course-adder>
            </v-flex>
            <!-- Courses Shower -->
            <v-flex>
                <courses-shower></courses-shower>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Logo from '../components/Logo';
import ScaleChanger from '../components/ScaleChanger';
import StatsShower from '../components/StatsShower';
import CourseAdder from '../components/CourseAdder';
import CoursesShower from '../components/CoursesShower';

export default {
    components: {
        Logo,
        ScaleChanger,
        StatsShower,
        CourseAdder,
        CoursesShower
    }
}
</script>

<style>

</style>
