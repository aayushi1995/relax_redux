import styled from "styled-components";

export const Center = styled.div`
    text-align: center;
`

export const PositionRelative = styled.div`
    position: relative;
`

export const Greeting = styled.div<{ primary?: boolean; }>`
    color : ${({ theme, primary }) => primary ? theme.colors.lighterText : theme.colors.white};
    font-size: ${({ theme, primary }) => primary ? theme.fontSize.sm :  theme.fontSize.lg};
    font-weight: ${({ primary }) => primary ? 500 : 600}; 
    text-transform: ${({ primary }) => primary ? `uppercase` : 'inherit'};
    margin:5px;
`
export const Button = styled.button<{ isFullWidth?: boolean; }>`
    background-color : ${({ theme }) => theme.colors.button};
    color : ${({ theme }) => theme.colors.white};
    font-size : ${({ theme }) => theme.fontSize.md};
    width: ${({ isFullWidth }) => isFullWidth ? '100%' : 'auto'};
    font-weight: 600;
    border: none;
    border-radius: 4px ;
    outline: none;
    box-shadow: none;
    padding: 15px;
    margin: 10px 0px;
    cursor: pointer;
`

export const LinkStyled = styled.div`
    font-size : ${({ theme }) => theme.fontSize.sm};
    color : ${({ theme }) => theme.colors.secondary};
    text-align: left;
    div {
        color:  ${({ theme }) => theme.colors.primary};
        display: inline-block;
        font-weight: 500 ;
    }
    cursor: pointer;
    
`