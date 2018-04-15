import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getAllMatches } from '../../actions/match'
import { getAllPlayers } from '../../actions/player'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import moment from 'moment'

class Insights extends Component {

    componentDidMount() {
        this.props.getAllMatches()
        this.props.getAllPlayers()
    }

    render() {
        return (
            <div>
                <h1>Insights</h1>
                
                <h2>Leaderboard</h2>
                <ReactTable 
                    data={this.props.player.players} 
                    columns={[
                        {
                            Header: 'Username',
                            accessor: 'username'
                        },
                        {
                            Header: 'Score',
                            accessor: 'score'
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                
                <h2>Matches</h2>
                <ReactTable 
                    data={this.props.match.matches} 
                    columns={[
                        {
                            Header: 'ID',
                            accessor: '_id'
                        },
                        {
                            Header: '# Players',
                            id: 'players',
                            accessor: d => _.size(d.players)
                        },
                        {
                            Header: 'Started on',
                            accessor: 'dateCreated',
                            Cell: props => <span>{ moment(props.value).fromNow() }</span>,
                            sortMethod: (a, b) => {
                                a = moment(a)
                                b = moment(b)
                                console.log(a, b)
                                return b > a ? 1 : -1
                            }
                        }
                    ]}
                    getTdProps={(state, rowInfo) => {
                        return {
                            onClick: () => {
                                this.props.history.push('/insights/matches/' + rowInfo.row._id)
                            }
                        }
                    }}
                    defaultSorted={[
                        {
                            id: 'dateCreated',
                            asc: true
                        }
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
        match: state.match,
        player: state.player
    }
}

export default connect(mapStateToProps, { getAllMatches, getAllPlayers })(Insights)