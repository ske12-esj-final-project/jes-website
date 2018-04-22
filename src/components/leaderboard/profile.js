import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import moment from 'moment'
import { PageContent, LayoutContent, Header, Subheader, 
        MyTable, BorderlessTable, Theme } from '../stylesheets/common'
import { getProfile } from '../../actions/profile'

const BasicInformation = styled.div`
    @media (max-width: 62.5em) {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }

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
`
const Card = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    margin: 1.33rem;
    color: #111111;
    background-color: rgb(253,184,5);
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
`
const CardDescription = styled(Subheader)`
    font-size: 1.33rem;
`
const WeaponImage = styled.object`
    width: 100%;
`

class Profile extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.id)
    }

    getWeaponKills(kills) {
        let counts = _.countBy(kills, 'weaponUsed')
        return _.map(Object.keys(counts), weapon => {
            return {
                name: weapon,
                kills: counts[weapon]
            }
        })
    }

    render() {
        let weaponKills = this.getWeaponKills(this.props.profile.profile.kills)
        return (
            <PageContent>
                <Helmet>
                    <title>{ this.props.profile.profile.username } - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                    <Header theme={ Theme.Main }>{ this.props.profile.profile.username }</Header>
                    <BasicInformation>
                        <Card>
                            <Header>{ this.props.profile.profile.score }</Header>
                            <CardDescription>Score</CardDescription>
                        </Card>
                        <Card>
                            <Header>{ _.size(this.props.profile.profile.kills) }</Header>
                            <CardDescription>Kills</CardDescription>
                        </Card>
                        <Card>
                            <Header>{ this.props.profile.profile.numWins }</Header>
                            <CardDescription>Wins</CardDescription>
                        </Card>
                        <Card>
                            <Header>{ _.size(this.props.profile.profile.joinedMatches) }</Header>
                            <CardDescription>Matches</CardDescription>
                        </Card>
                    </BasicInformation>
                </LayoutContent>
                
                <Subheader theme={ Theme.Main }>Best Weapons</Subheader>
                <BorderlessTable 
                        data={ weaponKills }
                        columns={[
                            {
                                Header: 'Name',
                                accessor: 'name',
                                Cell: props => <WeaponImage type="image/svg+xml"
                                            data={ `/guns/${ props.value }.svg` } 
                                            />
                            },
                            {
                                Header: 'Kills',
                                accessor: 'kills'
                            }
                        ]}
                        pageSize={ _.size(weaponKills) }
                        showPagination={false}
                    />
                <Subheader theme={ Theme.Main }>Recent Matches</Subheader>
                <MyTable 
                        data={this.props.profile.profile.joinedMatches} 
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
            </PageContent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, { getProfile })(Profile)