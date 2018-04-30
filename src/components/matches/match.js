import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatch, getMatchKill } from '../../actions/match'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, BorderlessTable, Theme } from '../stylesheets/common'
import ReactTooltip from 'react-tooltip'
import ReactTable from 'react-table'
import styled from 'styled-components'
import moment from 'moment'
import _ from 'lodash'

const MatchDetail = styled.h2`
    color: white;
`
const MinimapSection = styled.div`
    @media (max-width: 33.3em) {
        display: none;
    }

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
const Killfeed = styled(BorderlessTable)`
    @media (min-width: 33.3em) {
        display: none;
    }
`
const Killer = styled.h2`
    font-size: 1.33rem;
`
const WeaponImage = styled.object`
    width: ${ props => props.size }%;
`
const Victim = styled.h2`
    font-size: 1.33rem;
`
const Tooltip = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    width: 13.33rem;
    height: 3.33rem;
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
            <PageContent>
                <Helmet>
                    <title>Match { this.props.match.params.id } - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                    <Header theme={ Theme.Main }>Match Report</Header>

                    <MatchDetail>
                        Duration { this.props.matches.match.duration } seconds
                    </MatchDetail>

                    <MatchDetail>
                        Started on { this.getDateFromNow(this.props.matches.match.dateCreated) }
                    </MatchDetail>
                    
                    <MinimapSection>
                        <Minimap src="/images/map.png" alt="Minimap"/>
                        <IconGroup>
                            {
                                this.props.matches.kills.map((kill, index) => {
                                    return <div key={ index }>
                                        <ReactTooltip id={ "kill" + index } type="error">
                                            <Tooltip>
                                                <h2>{ kill.killer.username }</h2>
                                                <WeaponImage
                                                size="50" 
                                                type="image/svg+xml"
                                                data={ `/guns/${ kill.weaponUsed }.svg` } 
                                            />
                                                <h2>{ kill.victim.username }</h2>
                                            </Tooltip>
                                        </ReactTooltip>
                                        <Icon
                                        data-tip
                                        data-for={ "kill" + index } 
                                        src="/images/cross.png"
                                        x={ 48 + kill.victimPos.x / 4 } 
                                        z={ 48 + kill.victimPos.z / 4 } 
                                        alt="Cross"/>
                                    </div>
                                })
                            }
                        </IconGroup>
                    </MinimapSection>
                
                </LayoutContent>

                {
                        _.size(this.props.matches.kills) > 0 ? (
                            <Killfeed 
                            data={ this.props.matches.kills }
                            columns={[
                                {
                                    Header: 'Killer',
                                    accessor: 'killer',
                                    Cell: props => <Killer>{ props.value.username }</Killer>
                                },
                                {
                                    Header: 'Weapon used',
                                    accessor: 'weaponUsed',
                                    Cell: props => <WeaponImage size="100"
                                        type="image/svg+xml"
                                        data={ `/guns/${ props.value }.svg` } 
                                        />
                                },
                                {
                                    Header: 'Victim',
                                    accessor: 'victim',
                                    Cell: props => <Victim>{ props.value.username }</Victim>
                                },
                            ]}
                            pageSize={ _.size(this.props.matches.kills) }
                            showPagination={false}
                            />
                        ) : (
                            <MatchDetail>No kills found</MatchDetail>
                        )
                    }
            </PageContent>
                        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.match,
        player: state.player
    }
}

export default connect(mapStateToProps, { getMatch, getMatchKill })(MatchInfo)