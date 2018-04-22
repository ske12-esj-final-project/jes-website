import constants from '../constants'

const ACTION = constants.ACTION

let initialState = {
    profile: {
        username: 'Username',
        kills: []
    }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return { ...state }
    }
}

export default profileReducer