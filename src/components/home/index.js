import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, Subheader } from '../stylesheets/common'

const Logo = styled.img`
    width: 50%;
    height: 50%;
`
const PlayButton = styled.a`
    display: inline-block;
    font-size: 2rem;
    color: white;
    background: #00C853;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: 2px solid white;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
`

const Home = props => (
    <PageContent>
        <Helmet>
            <title>JES - Just Enjoy Shooting</title>
        </Helmet>
        <LayoutContent>
            <Logo src="/logo_large.svg" alt="JES"></Logo>
            <Subheader>Multiplayer FPS Battle Royale Game</Subheader>
            <PlayButton>Start</PlayButton>
        </LayoutContent>
        <LayoutContent>
            <Header>Just Enjoy Shooting !!</Header>
            <p>
                Just Enjoy Shooting (JES) is the multiplayer free-to-play, open-source & cross-platform
                first person shooter represented in battle royale mode. The rule is simple, the last one
                standing wins. Available on Windows, Linux, macOS, iOS & Android.
            </p>

            <Subheader>Fast and Intense</Subheader>
            <p>
                JES brings you into the fast and intense warfare, where each battle is simple but unique.
                We provide up to 10-player warfare, including 1v1 battle.
            </p>

            <Subheader>5-minute gameplay</Subheader>
            <p>
                With tiny-size map, each game takes only less that 5 minutes to find out who is the best
                in the battlefield.
            </p>

            <Subheader>Easy Interface</Subheader>
            <p>
                With simple, clean and easy-to-use HUD, just only few games, player will get used to
                gunplay mechanics, including hiding spot where might lead to the victory.
            </p>

            <Subheader>Weaponry</Subheader>
            <p>
                When it comes to war, find and collect some of 10+ weapons available on the map.
                Choose your path to join the gunfight. 
            </p>

            <Subheader>Costume-izable</Subheader>
            <p>
                JES provides 50+ stylish, outstanding costumes. Gear up and enjoy the battle royale.
            </p>


        </LayoutContent>
    </PageContent>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)