const INITIAL_STATE = {memes :[]}
function rootReducer(state=INITIAL_STATE, action) {
    if (action.type === "CREATE") {
        return { ...state, memes: [ ...state.memes, action.payload]}
    }
    if (action.type === "DELETE") {
        return { ...state, memes: state.memes.filter(m=>m!==action.payload)}
    }
    return state
}

export default rootReducer
