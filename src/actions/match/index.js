import axios from 'axios'
import constants from '../../constants'

const API = constants.API
const ACTION = constants.ACTION

const getAllMatchesStart = () => ({
    type: ACTION.GET_ALL_MATCHES_START
})

const getAllMatchesSuccess = matches => ({
    type: ACTION.GET_ALL_MATCHES_SUCCESS,
    matches: matches
})

const getAllMatchesFailed = err => ({
    type: ACTION.GET_ALL_MATCHES_FAILED,
    error: err
})

export const getAllMatches = () => (dispatch) => {
    dispatch(getAllMatchesStart())
    return axios.get(API.MATCH)
        .then(res => {
            dispatch(getAllMatchesSuccess(res.data))
            return res
        })
        .catch(err => {
            dispatch(getAllMatchesFailed(err))
            return err
        })
}