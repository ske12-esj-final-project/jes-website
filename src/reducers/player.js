import constants from '../constants'

const ACTION = constants.ACTION

let initialState = {
    players: []
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.GET_ALL_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.players
            }

        default:
            return { ...state }
    }
}

export default playerReducer