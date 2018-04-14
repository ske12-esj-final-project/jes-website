import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import matchReducer from './match'

export default combineReducers({
    routing: routerReducer,
    match: matchReducer
})

