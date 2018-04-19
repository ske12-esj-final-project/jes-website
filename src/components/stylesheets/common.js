import styled, { injectGlobal } from 'styled-components'
import ReactTable from 'react-table'

injectGlobal`
    @font-face {
        font-family: 'Motion Control';
        src: url('/MotionControl-Bold.ttf') format('truetype');
    }

    * {
        font-family: 'Motion Control';
    }

    p {
        font-family: 'Arial';
    }

    h1,h2,h3,h4,h5,h6,a {
        color: white;
    }
`

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
    width: 56.88%;
    max-width: 100%;
    margin: 0 auto;
    padding: 5rem 2.22rem 1.66rem 2.22rem;
    box-sizing: border-box;
    -webkit-transition: -webkit-transform 150ms ease-out;
    -webkit-transition: transform 150ms ease-out;
    transition: transform 150ms ease-out;
`

export const Header = styled.h1`
    display: block;
    width: 100%;
    font-size: 3rem;
    text-align: center;
    word-wrap: break-word;
    color: #444;
    background: rgb(253,184,5);
`

export const Subheader = styled.h2`
    font-size: 2.33rem;
    text-align: center;
`

export const MyTable = styled(ReactTable)`
    background: white;
    font-size: 1.33rem;
    border: 5px solid rgb(253,184,5) !important;

    .rt-td {
        cursor: pointer;
    }
`