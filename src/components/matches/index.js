import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getAllMatches } from '../../actions/match'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import moment from 'moment'

class Matches extends Component {

    componentDidMount() {
        this.props.getAllMatches()
    }

    render() {
        return (
            <div>
                <h1>Matches</h1>
                <ReactTable 
                    data={this.props.matches.matches} 
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
                                this.props.history.push('/matches/' + rowInfo.row._id)
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
        matches: state.match,
    }
}

export default connect(mapStateToProps, { getAllMatches })(Matches)