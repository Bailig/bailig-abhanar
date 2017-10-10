import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import menu from './menu/reducers'
import skill from './skills/reducers'
import work from './works/reducers'

const reducer = combineReducers({
    menu,
    skill,
    work,
    form
})

export default reducer