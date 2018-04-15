import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatch, getMatchKill } from '../../actions/match'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import moment from 'moment'

class MatchInfo extends Component {

    componentDidMount() {
        let matchID = this.props.match.params.id
        this.props.getMatch(matchID)
        this.props.getMatchKill(matchID)
    }

    getDateFromNow(date) {
        return moment(new Date(date)).fromNow()
    }

    render() {
        return (
            <div>
                <h1>Match { this.props.match.params.id }</h1>
                <h2>Duration { this.props.matches.match.duration } seconds</h2>
                <h2>Started on { this.getDateFromNow(this.props.matches.match.dateCreated) }</h2>

                <ReactTable 
                    data={ this.props.matches.kills }
                    columns={[
                        {
                            Header: 'Killer',
                            accessor: 'playerID'
                        },
                        {
                            Header: 'Weapon used',
                            accessor: 'weaponUsed'
                        },
                        {
                            Header: 'Victim',
                            accessor: 'victimID'
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.match,
    }
}

export default connect(mapStateToProps, { getMatch, getMatchKill })(MatchInfo)