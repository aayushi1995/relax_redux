import styled from "styled-components";

interface ITypography {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    font_weight?: number
    text_transform?: "uppercase" | "lowercase" | "inherit" | null
    color?: string
    text_align?: string
}

export const FlexCenter = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Center = styled.div`
    text-align: center;
    position:relative;
`

export const PositionRelative = styled.div`
    position: relative;
`

export const Typography = styled.div<ITypography>`
    color : ${({ theme, color }) => color ? theme?.colors?.[color] : theme?.colors?.white};
    font-size: ${({ theme, size }) => size ? theme?.fontSize?.[size] :  theme.fontSize.lg};
    font-weight: ${({ font_weight }) => font_weight ? font_weight : 600}; 
    text-transform: ${({ text_transform }) => text_transform ? text_transform : 'inherit'};
    text-align: ${({ text_align }) => text_align ? text_align : 'left'};
    margin:5px;
`
export const Button = styled.button<{ is_full_width?: boolean, type?: string }>`
    background-color : ${({ theme, type }) => type === "ghost" ? 'transparent': theme.colors.button};
    color : ${({ theme, type }) =>  type === "ghost" ? 'inherit': theme.colors.white};
    font-size : ${({ theme }) => theme.fontSize.md};
    width: ${({ is_full_width }) => is_full_width ? '100%' : 'auto'};
    font-weight: 600;
    border: none;
    border-radius: 4px ;
    outline: none;
    box-shadow: none;
    padding: 15px;
    margin: ${({ type }) =>  type === "ghost" ? '0px':  '10px 0px'};
    min-width: 100px ;
    cursor: pointer;
`

// TODO : change type
export const LinkStyled = styled.button<any>`
    font-size : ${({ theme }) => theme.fontSize.sm};
    color : ${({ theme }) => theme.colors.secondary};
    text-align: left;
    border: none;
    border-radius: none;
    outline: none;
    background-color: transparent;
    div {
        color:  ${({ theme }) => theme.colors.primary};
        display: inline-block;
        font-weight: 500 ;
    }
    cursor: pointer;
`

export const CrossWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color : ${({ theme }) => theme.colors.crossBackgroundColor};
    display:inline-block;
    background-color: #131319;
    width: 16px;
    height: 16px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
`