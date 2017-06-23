import C from './constants'

export const fetchWorks = () => {
    return {
        type: C.WORKS_FETCH
    }
}

export const cancelWorksFetch = () => {
    return {
        type: C.WORKS_FETCH_CANCEL
    }
}
