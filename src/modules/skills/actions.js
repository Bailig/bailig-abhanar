import C from './constants'

export const fetchSkills = () => {
    return {
        type: C.SKILLS_FETCH
    }
}

export const cancelSkillsFetch = () => {
    return {
        type: C.SKILLS_FETCH_CANCEL
    }
}
