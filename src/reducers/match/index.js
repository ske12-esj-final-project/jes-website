import constants from '../../constants'

const ACTION = constants.ACTION

let initialState = {
    matches: []
}

const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.GET_ALL_MATCHES_SUCCESS:
            return {
                ...state,
                matches: action.payload.matches
            }

        default:
            return { ...state }
    }
}

export default matchReducer