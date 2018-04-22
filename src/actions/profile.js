import axios from 'axios'
import constants from '../constants'

const API = constants.API
const ACTION = constants.ACTION

const getProfileStart = () => ({
    type: ACTION.GET_PROFILE_START
})

const getProfileSuccess = profile => ({
    type: ACTION.GET_PROFILE_SUCCESS,
    profile: profile
})

const getProfileFailed = err => ({
    type: ACTION.GET_PROFILE_FAILED,
    error: err
})

export const getProfile = (playerID) => (dispatch) => {
    dispatch(getProfileStart())
    return axios.get(API.USER_MATCH + '/profile/' + playerID)
        .then(res => {
            dispatch(getProfileSuccess(res.data))
            return res
        })
        .catch(err => {
            dispatch(getProfileFailed(err))
            return err
        })
}
