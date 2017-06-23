import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from 'redux-thunk'
import reducer from "./reducer"


const middleware = applyMiddleware(createLogger())

export default createStore(reducer, middleware)