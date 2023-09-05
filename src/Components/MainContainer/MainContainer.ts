import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    display:flex;
    align-items:center ;
   justify-content: center;
`
