<template>
    <v-container>
        <v-layout column>
            <v-layout row>
                <!-- Grade Selector -->
                <v-flex>
                    <v-layout column>
                        <v-flex>
                            Grade
                        </v-flex>
                        <v-flex>
                            <v-btn-toggle v-model="grade">
                                <!-- A Range -->
                                <v-flex>
                                    <v-layout column>
                                        <v-btn flat>A+</v-btn>
                                        <v-btn flat>A</v-btn>
                                        <v-btn flat>A-</v-btn>
                                    </v-layout>
                                </v-flex>
                                <!-- B Range -->
                                <v-flex>
                                    <v-layout column>
                                        <v-btn flat>B+</v-btn>
                                        <v-btn flat>B</v-btn>
                                        <v-btn flat>B-</v-btn>
                                    </v-layout>
                                </v-flex>
                                <!-- C Range -->
                                <v-flex>
                                    <v-layout column>
                                        <v-btn flat>C+</v-btn>
                                        <v-btn flat>C</v-btn>
                                        <v-btn flat>C-</v-btn>
                                    </v-layout>
                                </v-flex>
                                <!-- DF -->
                                <v-flex>
                                    <v-layout column>
                                        <v-btn flat>D</v-btn>
                                        <v-btn flat>E</v-btn>
                                        <v-btn flat>F</v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-btn-toggle>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <!-- Credit Selector -->
                <v-flex>
                    <v-layout column>
                        <v-flex>
                            Credit
                        </v-flex>
                        <v-flex>
                            <v-btn-toggle v-model="credit">
                                <v-flex>
                                    <v-layout>
                                        <v-btn flat>1</v-btn>
                                        <v-btn flat>2</v-btn>
                                        <v-btn flat>3</v-btn>
                                        <v-btn flat>4</v-btn>
                                        <v-btn flat>5</v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-btn-toggle>
                        </v-flex>
                    </v-layout>
                </v-flex>
                
                <!-- Label -->
                <v-flex>
                    <v-layout column>
                        <v-flex>
                            <v-text-field v-on:keyup.enter="add()" v-model="course" label="Label"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <!-- Add Button -->
            <v-btn block flat @click="add()" :disabled="!canAdd">Add Course</v-btn>
            <!-- Clear Button -->
            <v-btn block flat @click="clear()" :disabled="!canClear">Clear</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            grade: null,
            credit: null,
            course: null
        }
    },
    computed: {
        canAdd() {
            return this.grade != null && this.credit != null;
        },
        canClear() {
            return this.$store.getters.getCourses.length > 0;
        }
    },
    methods: {
        add() {
            if (!this.canAdd) {
                return;
            }

            const course = {
                grade: this.gradeMapper(this.grade), 
                credit: this.credit + 1, 
                course: this.course
            };

            this.$store.commit('addCourse', course);
            this.grade = null;
            this.credit = null;
            this.course = null;
        },
        gradeMapper(index) {
            const grades = [
                "A+", "A", "A-", 
                "B+", "B", "B-",
                "C+", "C", "C-",
                "D", "E", "F"
            ];
            return grades[index];
        },
        clear() {
            this.$store.commit('clearCourses');
            this.grade = null;
            this.credit = null;
            this.course = null;
        }
    }
}
</script>

<style>

</style>
