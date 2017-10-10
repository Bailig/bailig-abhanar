import C from './constants'

const menuInitialState = {
    isShowing: false
}
const menu = (state = menuInitialState, action) => {
    switch (action.type) {
        case C.MENU_TOGGLE:
            return { 
                ...state,
                isShowing: !state.isShowing
            }
        default:
            return state
    }
}

export default menu

