import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, Theme } from '../stylesheets/common'
import MatchTable from '../common/matchTable'
import { getAllMatches } from '../../actions/match'

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
                <MatchTable matches={ this.props.matches.matches } />
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