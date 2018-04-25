import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Home from '../home'
import Leaderboard from '../leaderboard'
import Profile from '../leaderboard/profile'
import Matches from '../matches'
import MatchInfo from '../matches/match'
import About from '../about'

const LayoutContainer = styled.div`
    @media (max-width: 62.5em) {
        padding-left: 0;
    }
    
    position: relative;
    overflow: auto;
`
const Navbar = styled.nav`
    position: fixed;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 3.66rem;
    font-size: 1.5rem;
    font-weight: 0.83rem;
    background: white;
    transition: background 300ms ease-out;
`
const NavbarContent = styled.div`
    @media (max-width: 62.5rem) {
        display: none;
    }

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: justify;
    padding: 0 1.11rem;
`
const NavbarLeft = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`
const NavbarRight = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
`
const NavbarLink = styled(NavLink)`
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    display: inline-block;
    transition: opacity 0.2s,transform 0.2s;
    cursor: pointer;
    -webkit-letter-spacing: 0.02rem;
    -moz-letter-spacing: 0.02rem;
    -ms-letter-spacing: 0.02rem;
    letter-spacing: 0.02rem;
    color: #444;

    &.active {
        color: rgb(253,184,5);
    }
`
const NavbarLogo = styled.div`
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/logo.svg);
    width: 7.33rem;
    height: 3.66rem;
`
const NavbarSeparator = styled.div`
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 0.27rem;
    height: 0.27rem;
    margin: 0 0.83rem;
    border-radius: 50%;
    opacity: 0.4;
`
const MobileNavbar = styled.div`
    @media (max-width: 62.5em) {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -ms-flex-pack: justify;
    }

    display: none;
`
const NavbarButton = styled.button`
    background: none;
    outline: none;
    border: none;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    min-width: 2.77rem;
    height: 2.77rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
`
const Sidebar = styled.nav`
    position: fixed;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    display: ${ props => props.showSidebar ? 'block' : 'none' };
    z-index: 1;
    left: 0;
    top: 2.77rem;
    bottom: 0;
    right: auto;
    width: 16.66rem;
    background: rgb(239,239,239);
    box-sizing: border-box;
    overflow-y: auto;
    -webkit-transition: -webkit-transform 150ms ease-out;
    -webkit-transition: transform 150ms ease-out;
    transition: transform 150ms ease-out;
`
const SidebarMenu = styled.div`
    display: 'block'
    box-sizing: border-box;
    height: 100%;
    padding-top: 2rem;
`

const SubMenu = styled(NavLink)`
    display: block;
    margin: 2.22rem;
    font-size: 1.5rem;
    font-weight: normal;
    cursor: pointer;
    color: inherit;

    .active {
        color: rgb(253,184,5);
    }
`

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    toggleSidebar() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <LayoutContainer>
                <header>
                    <Navbar>
                        <NavbarContent>
                            <NavbarLeft>
                                <NavbarLink activeClassName='active' to="/">
                                    <NavbarLogo />
                                </NavbarLink>
                                <NavbarSeparator />
                                <NavbarLink activeClassName='active' to="/leaderboard">Leaderboard</NavbarLink>       
                                <NavbarSeparator />
                                <NavbarLink activeClassName='active' to="/matches">Matches</NavbarLink>
                                <NavbarSeparator />
                                <NavbarLink activeClassName='active' to="/about">About</NavbarLink>
                            </NavbarLeft>
                        </NavbarContent>
        
                        <MobileNavbar>
                            <NavbarButton onClick={() => this.toggleSidebar()}>
                                <img src="/hamburger.svg" alt="Click me"/>
                            </NavbarButton>
                            <NavbarLink to="/">
                                <NavbarLogo />
                            </NavbarLink>
                        </MobileNavbar>
                    </Navbar>
                    <Sidebar showSidebar={ this.state.show }>
                        <SidebarMenu>
                            <SubMenu to="/leaderboard">Leaderboard</SubMenu>
                            <SubMenu to="/matches">Matches</SubMenu>
                            <SubMenu to="/about">About</SubMenu>
                        </SidebarMenu>    
                    </Sidebar>
                </header>
        
                <main>
                    <Route exact path="/" component={ Home }></Route>
                    <Route exact path="/leaderboard" component={ Leaderboard }></Route>
                    <Route path="/profile/:id" component={ Profile }></Route>
                    <Route exact path="/matches" component={ Matches }></Route>
                    <Route exact path="/about" component={ About }></Route>
                    <Route path="/matches/:id" component={ MatchInfo }></Route>
                    {/* <Route component={()=>(<div>NoMatch</div>)} /> */}
                </main>
            </LayoutContainer>
        )
    }
}

export default App