import styled from 'styled-components'

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
    font-size: 2.33rem;
    text-align: center;
`

export const Subheader = styled.h2`
    font-size: 1.66rem;
    font-weight: 100;
    text-align: center;
`