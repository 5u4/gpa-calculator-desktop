const standardScale = {
    "A+": 4, "A": 4, "A-": 3.7, 
    "B+": 3.3, "B": 3, "B-": 2.7,
    "C+": 2.3, "C": 2, "C-": 1.7,
    "D": 1, "F": 0
}

const extendedScale = {
    "A+": 4.33, "A": 4, "A-": 3.67,
    "B+": 3.33, "B": 3, "B-": 2.67,
    "C+": 2.33, "C": 2, "C-": 1.67,
    "D": 1, "F": 0
}

const state = {
    scale: extendedScale
}

const getters = {
    getScale(state) {
        return state.scale["A+"].toFixed(2);
    }
}

const mutations = {
    changeScale(state, scale) {
        if (scale == 4.33) {
            state.scale = extendedScale;
        } else {
            state.scale = standardScale;
        }
    }
}

export default {
    state,
    getters,
    mutations
}
