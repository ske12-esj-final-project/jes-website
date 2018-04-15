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

const getMatchStart = () => ({
    type: ACTION.GET_MATCH_START
})

const getMatchSuccess = match => ({
    type: ACTION.GET_MATCH_SUCCESS,
    match: match
})

const getMatchFailed = err => ({
    type: ACTION.GET_MATCH_FAILED,
    error: err
})

const getMatchKillStart = () => ({
    type: ACTION.GET_MATCH_KILL_START
})

const getMatchKillSuccess = kills => ({
    type: ACTION.GET_MATCH_KILL_SUCCESS,
    kills: kills
})

const getMatchKillFailed = err => ({
    type: ACTION.GET_MATCH_KILL_FAILED,
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

export const getMatch = (matchID) => (dispatch) => {
    dispatch(getMatchStart())
    return axios.get(API.MATCH + '/' + matchID)
        .then(res => {
            dispatch(getMatchSuccess(res.data))
            return res
        })
        .catch(err => {
            dispatch(getMatchFailed(err))
            return err
        })
}

export const getMatchKill = (matchID) => (dispatch) => {
    dispatch(getMatchKillStart())
    return axios.get(API.MATCH + '/' + matchID + '/kills')
    .then(res => {
        dispatch(getMatchKillSuccess(res.data))
        return res
    })
    .catch(err => {
        dispatch(getMatchKillFailed(err))
        return err
    })
}