import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getAllMatches } from '../../actions/match'
import { getAllPlayers } from '../../actions/player'

class Insights extends Component {
    render() {
        return (
            <div>
                <h1>Insights</h1>
                <button onClick={() => this.props.getAllMatches()}>Get All Matches</button>
                <div>
                    { _.map(this.props.match.matches, m => {
                        return (
                            <div key={ m._id }>{ m.dateCreated } ({ m.duration })</div>
                        )
                    }) }
                </div>

                <button onClick={() => this.props.getAllPlayers()}>Get All Players</button>
                <div>
                    { _.map(this.props.player.players, p => {
                        return (
                            <div key={ p.id }>{ p.username }</div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        match: state.match,
        player: state.player
    }
}

export default connect(mapStateToProps, { getAllMatches, getAllPlayers })(Insights)