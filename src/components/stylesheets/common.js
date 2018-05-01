import styled, { injectGlobal } from 'styled-components'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

injectGlobal`
    @font-face {
        font-family: 'Motion Control';
        src: url(/fonts/MotionControl-Bold.ttf) format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        src: url(/fonts/Roboto-Regular.ttf) format('truetype');
    }

    * {
        font-family: 'Motion Control';
        text-decoration: none;
    }

    p {
        font-family: 'Roboto';
    }

    body {
        background-color: #444;
    }
`

export const Theme = {
    Main: '#FDB805',
    Dark: '#FFF',
    Light: '#000'
}

export const PageContent = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    background-color: #444;
`
export const LayoutContent = styled.div`
    padding: 5rem 2.22rem 1.66rem 2.22rem;
    width: 58.66%;
    box-sizing: border-box;
    -webkit-transition: -webkit-transform 150ms ease-out;
    -webkit-transition: transform 150ms ease-out;
    transition: transform 150ms ease-out;
`
export const Header = styled.h1`
    display: block;
    width: 100%;
    font-size: 3.66rem;
    text-align: center;
    word-wrap: break-word;
    color: ${ props => props.theme };
`
export const Subheader = styled.h2`
    font-size: 2.33rem;
    text-align: center;
    color: ${ props => props.theme };
`

export const Description = styled.h3`
    font-size: 1.66rem;
    text-align: center;
    color: ${ props => props.theme };
`
export const MyTable = styled(ReactTable) `
    background: white;
    font-size: 1.33rem;
    border: 5px solid rgb(253,184,5) !important;

    .rt-td {
        cursor: pointer;
    }
`
export const BorderlessTable = styled(ReactTable)`
    @media (max-width: 62.5em) {
        width: 100%;
    }

    width: 50%;    
    text-align: center;
    color: white;

    .rt-td {
        margin: auto;
    }

    .rt-th {
        display: none;
    }
`
export const WeaponImage = styled.object`
    width: ${ props => props.size }%;
`