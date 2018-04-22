import constants from '../constants'

const ACTION = constants.ACTION

let initialState = {
    matches: [],
    match: {},
    kills: []
}

const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.GET_ALL_MATCHES_SUCCESS:
            return {
                ...state,
                matches: action.matches
            }

        case ACTION.GET_MATCH_SUCCESS:
            return {
                ...state,
                match: action.match
            }

        case ACTION.GET_MATCH_KILL_SUCCESS:
            return {
                ...state,
                kills: action.kills
            }

        default:
            return { ...state }
    }
}

export default matchReducer