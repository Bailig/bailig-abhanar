import C from './constants'
import $ from 'jquery'

export const toggleMenu = () => {
    return {
        type: C.MENU_TOGGLE
    }
}


export const scrollTo = (targetId, pathName, delay=0) => (dispatch) => {
    dispatch(toggleMenu())

    if (pathName != null) {
        delay = pathName === "/skill" || pathName === "/work" ? 700 : 0
    }

    setTimeout((() => {
        $('html, body').animate({
            scrollTop: $(targetId).offset().top + 60
        }, 500)
        dispatch({
            type: C.PAGE_SCROLL
        })
    }), delay)
}