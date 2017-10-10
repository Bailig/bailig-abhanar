
import { auth } from '../../firebase'
import C from './constants'

export const loginUser = (values, callback) => (dispatch) => {
    const { email, password } = values
    dispatch({ type: C.USER_LOGIN })
    auth.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: C.USER_LOGIN_UPDATE,
                payload: user
            })
            callback()
        } else {
            auth.signInWithEmailAndPassword(email, password)
                .catch((error) => {
                    if (!error) { return }
                    dispatch({
                        type: C.USER_LOGIN_FIELD,
                        payload: error.message
                    })
                })
        }
    })
}


export const logoutUser = () => (dispatch) => {
    auth.signOut().then(() => {
        dispatch({ type: C.USER_LOGOUT })
    })
}