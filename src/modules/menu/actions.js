import $ from 'jquery'
import C from './constants'

export const toggleMenu = () => {
    return {
        type: C.MENU_TOGGLE
    }
}


export const scrollTo = (targetId, pathName = '') => (dispatch) => {
    if (!targetId) {
        return
    }
    
    const delay = pathName === '/skill' || pathName === '/work' ? 700 : 0
    
    setTimeout((() => {
        $('html, body').animate({
            scrollTop: $(targetId).offset().top + 60
        }, 500)
        dispatch({
            type: C.PAGE_SCROLL
        })
    }), delay)
}