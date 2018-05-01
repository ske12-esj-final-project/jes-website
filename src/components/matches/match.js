import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatch, getMatchKill } from '../../actions/match'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { PageContent, LayoutContent, Header, 
        WeaponImage, BorderlessTable, Theme } from '../stylesheets/common'

import Icon from './icon'
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
const Killfeed = styled(BorderlessTable)`
    @media (min-width: 33.3em) {
        display: none;
    }
`
const Killer = styled.h2`
    font-size: 1.33rem;
`
const Victim = styled.h2`
    font-size: 1.33rem;
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
                                return <Icon key={ index } index={ index } kill={ kill } />  
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