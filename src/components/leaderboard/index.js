import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageContent, LayoutContent, Header } from '../stylesheets/common'
import { getAllPlayers } from '../../actions/player'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Leaderboard extends Component {

    componentDidMount() {
        this.props.getAllPlayers()
    }

    render() {
        return (
            <PageContent>
                <LayoutContent>
                <Header>Leaderboard</Header>
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