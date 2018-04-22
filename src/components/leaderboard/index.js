import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, MyTable, Theme } from '../stylesheets/common'
import { getAllPlayers } from '../../actions/player'

class Leaderboard extends Component {

    componentDidMount() {
        this.props.getAllPlayers()
    }

    render() {
        return (
            <PageContent>
                <Helmet>
                    <title>Leaderboard - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                <Header theme={ Theme.Main }>Leaderboard</Header>
                    <MyTable 
                        data={this.props.player.players} 
                        columns={[
                            {
                            Header: 'Username',
                            accessor: 'username'
                            },
                            {
                            Header: 'Score',
                            id: 'score',
                            accessor: 'score'
                            },
                        ]}
                        getTdProps={(state, rowInfo) => {
                            return {
                                onClick: () => {
                                    this.props.history.push('/profile/' + rowInfo.original.id)
                                }
                            }
                        }}
                        defaultSorted={[
                            {
                                id: 'score',
                                desc: true
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </LayoutContent>
            </PageContent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps, { getAllPlayers })(Leaderboard)