import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, MyTable, Theme } from '../stylesheets/common'
import { getAllMatches } from '../../actions/match'
import _ from 'lodash'
import moment from 'moment'

class Matches extends Component {

    componentDidMount() {
        this.props.getAllMatches()
        this.matchInterval = setInterval(() => this.props.getAllMatches(), 60000)
    }

    componentWillUnmount() {
        clearInterval(this.matchInterval)
    }

    render() {
        return (
            <PageContent>
                <Helmet>
                    <title>Matches - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                    <Header theme={ Theme.Main }>Matches</Header>
                </LayoutContent>
                <MyTable 
                        data={this.props.matches.matches} 
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
            </PageContent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.match,
    }
}

export default connect(mapStateToProps, { getAllMatches })(Matches)