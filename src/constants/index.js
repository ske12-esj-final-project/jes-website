export default {
    API: {
        USER: 'http://jes.api.user.safesuk.me/v1/users',
        MATCH: 'http://jes.api.match.safesuk.me/v1/matches',
        KILL: 'http://jes.api.match.safesuk.me/v1/kills'
    },

    ACTION: {
        GET_ALL_MATCHES_START: 'GET_ALL_MATCHES_START',
        GET_ALL_MATCHES_SUCCESS: 'GET_ALL_MATCHES_SUCCESS',
        GET_ALL_MATCHES_FAILED: 'GET_ALL_MATCHES_FAILED',

        GET_MATCH_START: 'GET_MATCH_START',
        GET_MATCH_SUCCESS: 'GET_MATCH_SUCCESS',
        GET_MATCH_FAILED: 'GET_MATCH_FAILED',

        GET_ALL_PLAYERS_START: 'GET_ALL_PLAYERS_START',
        GET_ALL_PLAYERS_SUCCESS: 'GET_ALL_PLAYERS_SUCCESS',
        GET_ALL_PLAYERS_FAILED: 'GET_ALL_PLAYERS_FAILED'
    }
}