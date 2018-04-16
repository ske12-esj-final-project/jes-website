import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { PageContent, LayoutContent, Header, Subheader } from '../stylesheets/common'

const DownloadButton = styled.a`
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
        <LayoutContent>
            <Header>Just Enjoy Shooting</Header>
            <Subheader>Choose platform</Subheader>
            <DownloadButton>Windows</DownloadButton>
            <DownloadButton>macOS</DownloadButton>
        </LayoutContent>
    </PageContent>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)