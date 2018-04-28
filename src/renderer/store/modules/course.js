const state = {
    courses: [{grade: "A+", credit: 3}, {grade: "B", credit: 5}]
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

export default {
    state,
    getters
}
