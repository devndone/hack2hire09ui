export const state = {
    user: null
}

export const mutations = {
    SET_USER: (state, user) => {
        state.user = user
    }
}

export const actions = {
    async login({ state, commit, store }, loginData) { // TODO: maybe get userdetails also
    }
}
