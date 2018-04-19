import React from 'react'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, Theme } from '../stylesheets/common'

const About = () => (
    <PageContent>
        <Helmet>
            <title>About us - Just Enjoy Shooting</title>
        </Helmet>
        <LayoutContent>
            <Header theme={ Theme.Main }>About</Header>
            <p>
                Just Enjoy Shooting (JES) is the multiplayer free-to-play, open-source & cross-platform
                first person shooter represented in battle royale mode. The rule is simple, the last one
                standing wins. Available on Windows, Linux, macOS, iOS & Android.
            </p>
        </LayoutContent>
    </PageContent>
)

export default About