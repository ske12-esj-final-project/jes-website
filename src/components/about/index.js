import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { PageContent, LayoutContent, Header, Description, Theme } from '../stylesheets/common'

const Text = styled.p`
    color: ${ props => props.theme }
`

const About = () => (
    <PageContent>
        <Helmet>
            <title>About us - Just Enjoy Shooting</title>
        </Helmet>
        <LayoutContent>
            <Header theme={ Theme.Main }>About</Header>
            <Text theme={ Theme.Dark }>
                Just Enjoy Shooting (JES) is the multiplayer free-to-play, open-source & cross-platform
                first person shooter represented in battle royale mode. The rule is simple, the last one
                standing wins. Available on Windows, Linux, macOS & Android.
            </Text>
        </LayoutContent>
    </PageContent>
)

export default About