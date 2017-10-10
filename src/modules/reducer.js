import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import menu from './menu/reducers'
import skill from './skills/reducers'
import work from './works/reducers'
import access from './access/reducers'

const reducer = combineReducers({
    menu,
    skill,
    work,
    form,
    access
})

export default reducer