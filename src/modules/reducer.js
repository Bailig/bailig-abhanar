import { combineReducers } from 'redux'
import skill from './skills/reducers'
import work from './works/reducers'

const reducer = combineReducers({
    skill,
    work
})

export default reducer