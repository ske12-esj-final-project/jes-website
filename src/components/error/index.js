import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { PageContent, LayoutContent, Header, Theme } from '../stylesheets/common'

const Image = styled.img`
    width: 50%;
`

class Error extends Component {
    render() {
        return (
            <PageContent>
                <Helmet>
                    <title>Page not found - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                    <Header theme={ Theme.Main }>Page not found</Header>
                    <Image src="/images/skull.png" alt="Skull"/>
                </LayoutContent>
            </PageContent>
        )
    }
}

export default Error