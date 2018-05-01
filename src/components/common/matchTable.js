import React, { Component } from 'react'
import { MyTable } from '../stylesheets/common'
import _ from 'lodash'
import moment from 'moment'

class MatchTable extends Component {
    render() {
        return (
            <MyTable 
                data={ this.props.matches } 
                columns={[
                    {
                        Header: 'Started on',
                        accessor: 'dateCreated',
                        Cell: props => <span>{ moment(props.value).fromNow() }</span>,
                        sortMethod: (a, b) => {
                            a = moment(a)
                            b = moment(b)
                            return b > a ? 1 : -1
                        }
                    },
                    {
                        Header: '# Players',
                        id: 'players',
                        accessor: d => _.size(d.players)
                    },
                    {
                        Header: 'Duration (sec)',
                        accessor: 'duration'
                    }
                ]}
                getTdProps={(state, rowInfo) => {
                    return {
                        onClick: () => {
                            this.props.history.push('/matches/' + rowInfo.original._id)
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
        )
    }
}

export default MatchTable