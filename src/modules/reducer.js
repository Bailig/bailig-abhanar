import { combineReducers } from 'redux'
import menu from './menu/reducers'
import skill from './skills/reducers'
import work from './works/reducers'

const reducer = combineReducers({
    menu,
    skill,
    work
})

export default reducer