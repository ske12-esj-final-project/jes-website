import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import matchReducer from './match'
import playerReducer from './player'

export default combineReducers({
    routing: routerReducer,
    match: matchReducer,
    player: playerReducer
})

