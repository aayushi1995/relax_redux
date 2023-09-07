import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    display:flex;
    align-items:flex-start ;
    justify-content: center;
`
