import axios from 'axios'
import constants from '../../constants'

const API = constants.API
const ACTION = constants.ACTION

const getAllPlayersStart = () => ({
    type: ACTION.GET_ALL_PLAYERS_START
})

const getAllPlayersSuccess = players => ({
    type: ACTION.GET_ALL_PLAYERS_SUCCESS,
    players: players
})

const getAllPlayersFailed = err => ({
    type: ACTION.GET_ALL_PLAYERS_FAILED,
    error: err
})

export const getAllPlayers = () => (dispatch) => {
    dispatch(getAllPlayersStart())
    return axios.get(API.USER)
        .then(res => {
            dispatch(getAllPlayersSuccess(res.data))
            return res
        })
        .catch(err => {
            dispatch(getAllPlayersFailed(err))
            return err
        })
}