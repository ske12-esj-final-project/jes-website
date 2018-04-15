import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getMatch } from '../../actions/match'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import moment from 'moment'

class MatchInfo extends Component {

    componentDidMount() {
        this.props.getMatch(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>Match {this.props.match.params.id}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.match
    }
}

export default connect(mapStateToProps, { getMatch })(MatchInfo)