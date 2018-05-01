import React, { Component } from 'react'
import { WeaponImage } from '../stylesheets/common'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const Tooltip = styled.div`
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
    width: 13.33rem;
    height: 3.33rem;
`
const Cross = styled.img`
    position: absolute;
    left: ${ props => props.x }%;
    bottom: ${ props => props.z }%;
    width: 2%;
    height: 2%;
`

class Icon extends Component {
    render() {
        return (
            <div>
                <ReactTooltip id={ "kill" + this.props.index } type="error">
                    <Tooltip>
                        <h2>{ this.props.kill.killer.username }</h2>
                        <WeaponImage
                        size="50" 
                        type="image/svg+xml"
                        data={ `/guns/${ this.props.kill.weaponUsed }.svg` } 
                        />
                        <h2>{ this.props.kill.victim.username }</h2>
                    </Tooltip>
                </ReactTooltip>

                <Cross
                data-tip
                data-for={ "kill" + this.props.index } 
                src="/images/cross.png"
                x={ 48 + this.props.kill.victimPos.x / 4 } 
                z={ 48 + this.props.kill.victimPos.z / 4 } 
                alt="Cross"
                />
            </div>
        )
    }
}

export default Icon