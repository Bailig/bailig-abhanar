import { skillRef } from '../../firebase'
import C from './constants'


export const cancelSkillFetch = () => {
    return {
        type: C.SKILLS_FETCH_CANCEL
    }
}

export const updateSkill = (data) => {
    return {
        type: C.SKILLS_UPDATE,
        payload: data
    }
}

export const fetchSkill = () => (dispatch, getState) => {
    if (getState().skill.isFetching) {
        return
    }
    dispatch({
        type: C.SKILLS_FETCH
    })
    skillRef.on('value', (snapshot) => {
        dispatch(updateSkill(snapshot.val()))
    })
}