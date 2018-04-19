import React from 'react'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header } from '../stylesheets/common'

const About = () => (
    <PageContent>
        <Helmet>
            <title>About us - Just Enjoy Shooting</title>
        </Helmet>
        <LayoutContent>
            <Header>About</Header>
        </LayoutContent>
    </PageContent>
)

export default About