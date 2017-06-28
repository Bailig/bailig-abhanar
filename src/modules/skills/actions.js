// import { ref } from '../../firebase'
import C from './constants'

// const skillRef = ref.child('skill')

export const cancelSkillFetch = () => {
    return {
        type: C.SKILLS_FETCH_CANCEL
    }
}

export const fetchSkill = () => (dispatch, getState) => {

    if (getState().skill.isFetching) {
        return
    }
    // skillRef.on('value', snapshot => {
    //     dispatch ({
    //         type: C.SKILLS_FETCH,
    //         payload: snapshot.val()
    //     })
    //     cancelSkillFetch()
    // })
}


