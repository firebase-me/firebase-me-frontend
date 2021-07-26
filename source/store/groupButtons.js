export const state = () => ({
    groupButtonPos: 0,
    adminGroupButtonPos: 0,
    adminUserButtonPos: 0
})

export const mutations = {
    setGroupButtonPos (state, pos) {
        state.groupButtonPos = pos
    },
    setAdminGroupButtonPos (state, pos) {
        state.adminGroupButtonPos = pos
    },
    setAdminUserButtonPos (state, pos) {
        state.adminUserButtonPos = pos
    }
}