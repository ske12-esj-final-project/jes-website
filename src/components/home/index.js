import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Subheader, Theme } from '../stylesheets/common'

const Colors = {
    Red: '#F44336',
    LightBlue: '#81D4FA',
    Green: '#00C853',
    Sand: '#FFFF8D',
    Pink: '#F50057'
}

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
const Article = styled.article`
    width: 100%;
    height: auto;
    padding: 5.55rem 0 5.55rem 0;
    background: ${ props => props.color };
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
`
const ArticleContent = styled.div`
    padding: 0 2.33rem;
    margin-left: ${ props => props.align === 'left' ? '5rem' : '0' };
    margin-right: ${ props => props.align === 'right' ? '5rem' : '0' };
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: left;
    justify-content: left;
    -webkit-align-items: left;
    -webkit-box-align: left;
    -ms-flex-align: left;
    align-items: ${ props => props.align === 'left' ? 'flex-start' : 'flex-end' };
    text-align: ${ props => props.align };
    color: ${ props => props.theme };

    @media (max-width: 33.33em) {
        margin: 0;
    }
`
const ArticleHeader = styled.h1`
    @media (max-width: 62.5em) {
        font-size: 3rem;
        text-align: center;
    }

    font-size: 4rem;
`
const ArticleDescription = styled.p`
    @media (max-width: 62.5em) {
        text-align: center;
        font-size: 1rem;
        width: 100%;
    }

    font-size: 1.33rem;
    width: 75%;
`
const ArticleImage = styled.img`
    @media (max-width: 33.33em) {
        display: none;
    }

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 6.66rem;
    margin-right: 6.66rem;
    height: 22.22rem;
`

const Home = props => (
    <PageContent>
        <Helmet>
            <title>JES - Just Enjoy Shooting</title>
        </Helmet>
        <LayoutContent>
            <Logo src="/logo_large.svg" alt="JES"></Logo>
            <Subheader theme={ Theme.Dark }>Multiplayer FPS Battle Royale Game</Subheader>
            <PlayButton>Start</PlayButton>
        </LayoutContent>

        <Article color={ Colors.Red }>
            <ArticleContent theme={ Theme.Dark } align="left">
                <ArticleHeader>Fast-and-Intense</ArticleHeader>
                <ArticleDescription>
                    JES brings you into the fast and intense warfare provided up to 
                    10-player warfare, including 1v1 battle.
                </ArticleDescription>
            </ArticleContent>
            <ArticleImage src="/images/riot_cop.png" alt="Riot Cop"/>
        </Article>

        <Article color={ Colors.LightBlue }>
            <ArticleImage src="/images/clock.png" alt="Clock"/>
            <ArticleContent theme={ Theme.Light } align="right">
                <ArticleHeader>5-minute gameplay</ArticleHeader>
                <ArticleDescription>
                    With tiny-size map, each game takes only less that 5 minutes to find out who is the best
                    in the battlefield.
                </ArticleDescription>
            </ArticleContent>
        </Article>

        <Article color={ Colors.Green }>
            <ArticleContent theme={ Theme.Dark } align="left">
                <ArticleHeader>Easy to play</ArticleHeader>
                <ArticleDescription>
                    With simple and easy-to-use HUD, just only few games, you will get used to
                    gunplay mechanics and hiding spots, as well as potential strategies of the victory.
                </ArticleDescription>
            </ArticleContent>
            <ArticleImage src="/images/HUD.png" alt="HUD"/>
        </Article>

        <Article color={ Colors.Sand }>
            <ArticleImage src="/images/weaponry.png" alt="Weaponry"/>
            <ArticleContent theme={ Theme.Light } align="right">
                <ArticleHeader>Weaponry</ArticleHeader>
                <ArticleDescription>
                    When it comes to war, find and collect some of 10+ weapons available on the map.
                    Choose your path to join the gunfight. 
                </ArticleDescription>
            </ArticleContent>
        </Article>

        <Article color={ Colors.Pink }>
            <ArticleContent theme={ Theme.Dark } align="left">
                <ArticleHeader>Costume-izable</ArticleHeader>
                <ArticleDescription>
                    JES provides 50+ stylish, outstanding costumes. Gear up and enjoy the battle royale.
                </ArticleDescription>                    
            </ArticleContent>
            <ArticleImage src="/images/costume.png" alt="Costume"/>
        </Article>
    </PageContent>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)