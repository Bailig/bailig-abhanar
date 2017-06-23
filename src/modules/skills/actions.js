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

export const showSkillContent = () => {
    return {
        type: C.SKILL_CONTENT_SHOW
    }
}

export const hideSkillContent = () => {
    return {
        type: C.SKILL_CONTENT_HIDE
    }
}

