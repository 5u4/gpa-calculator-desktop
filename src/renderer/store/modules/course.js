const state = {
    courses: []
}

const getters = {
    getCourses(state) {
        return state.courses;
    },
    getAverageGrade(state, getters, rootState) {
        let totalCredit = 0;
        let totalGrade = 0;
        state.courses.forEach(course => {
            const credit = parseInt(course.credit);
            totalCredit += credit;
            totalGrade += credit * rootState.scale.scale[course.grade];
        });
        
        const grade = totalGrade / totalCredit;
        if (!grade) {
            return 0;
        } else {
            return grade.toFixed(2);
        }
    }
}

const mutations = {
    /* payload: {grade: Number, credit: Number, label: String} */
    addCourse(state, payload) {
        state.courses.push({
            grade: payload.grade,
            credit: payload.credit,
            label: payload.label
        });
    },
    clearCourses(state) {
        state.courses = [];
    }
}

export default {
    state,
    getters,
    mutations
}
