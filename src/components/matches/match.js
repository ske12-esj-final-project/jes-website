import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatch, getMatchKill } from '../../actions/match'

import ReactTable from 'react-table'
import styled from 'styled-components'
import map from '../../map.png'
import cross from '../../cross.png'
import 'react-table/react-table.css'
import moment from 'moment'

const MinimapSection = styled.div`
    position: relative;
    overflow: hidden;
`

const Minimap = styled.img`
    position: relative;
    width: 100%;
    height: auto;
`

const IconGroup = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 102;
`

const Icon = styled.img`
    position: absolute;
    left: ${ props => props.x }%;
    bottom: ${ props => props.z }%;
    width: 2%;
    height: 2%;
`

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

                <MinimapSection>
                    <Minimap src={ map } alt="Minimap"/>
                    <IconGroup>
                        {
                            this.props.matches.kills.map((kill, index) => {
                                return <Icon key={ index } src={ cross }
                                    x={ 48 + kill.victimPos.x / 4 } 
                                    z={ 48 + kill.victimPos.z / 4 } 
                                    alt="Cross"/>
                            })
                        }
                    </IconGroup>
                </MinimapSection>
                
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