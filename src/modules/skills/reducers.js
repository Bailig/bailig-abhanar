import C from './constants'

const skillInitialState = {
    isFetching: false,
    workExperience: {
        design: 10,
        frontend: 20,
        backend: 70,
        ios: 0
    },
    personalInterest: {
        design: 15,
        frontend: 40,
        backend: 15,
        ios: 30
    },
    frontendSkill: {
        html: 5,
        css: 5,
        sass: 4,
        bootstrap: 5,
        javascript: 5,
        jquery: 5,
        react: 4,
        redux: 3
    },
    backendSkill: {
        cSharp: 5,
        asp: 5,
        sqlServer: 3,
        python: 3,
        node: 4,
        express: 1,
        postgres: 2
    },
    iosSkill: {
        swift: 5,
        objectiveC: 2,
        coreData: 3,
        firebase: 4
    }
}
const skill = (state = skillInitialState, action) => {
    switch (action.type) {
        case C.SKILLS_FETCH:
            return {...state,
                isFetching: true
            }
        case C.SKILLS_FETCH_CANCEL:
            return {...state,
                isFetching: false
            }
        default:
            return state
    }
}

export default skill
