import C from './constants'

const accessInitialState = {
    user: null,
    error: ''
}

export const access = (state = accessInitialState, action) => {
    switch (action.type) {
        case C.USER_LOGIN_FIELD:
            return {
                ...state,
                error: action.payload
            }
        case C.USER_LOGIN_UPDATE:
            return {
                ...state,
                user: action.payload,
                error: ''
            }
        case C.USER_LOGOUT:
            return accessInitialState
        default:
            return state
    }
}


export default access
