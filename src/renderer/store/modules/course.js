const state = {
    courses: []
}

const getters = {
    getCourses(state) {
        return state.courses;
    }
}

export default {
    state,
    getters
}
