import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PageContent, LayoutContent, Header, Theme } from '../stylesheets/common'
import { getProfile } from '../../actions/profile'

class Profile extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.id)
    }

    render() {
        return (
            <PageContent>
                <Helmet>
                    <title>Username - Just Enjoy Shooting</title>
                </Helmet>
                <LayoutContent>
                    <Header theme={ Theme.Main }>Player</Header>
                </LayoutContent>
            </PageContent>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, { getProfile })(Profile)