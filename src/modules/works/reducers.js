import C from './constants'

const workInitialState = {
    isFetching: false
}
const work = (state = workInitialState, action) => {
    switch (action.type) {
        case C.WORKS_FETCH:
            return {...state,
                isFetching: true
            }
        case C.WORKS_FETCH_CANCEL:
            return {...state,
                isFetching: false
            }
        default:
            return state
    }
}

export default work

