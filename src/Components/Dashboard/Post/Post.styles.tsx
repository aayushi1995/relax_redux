import styled from 'styled-components'


export const CardWrapper = styled.div`
    background-color: ${({theme}) => theme?.colors?.emojiBackgroundColor};
    padding: 15px 10px;
    margin: 20px 0px;
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme?.colors?.secondaryBackground};
`

export const UserInfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
`

export const ProfilePic = styled.img`
    background-color: lightgray;
    width: 45px;
    height:45px;
    border-radius: 50%;
`

export const ContentSection = styled.div`
    background-color: ${({theme}) => theme?.colors?.postBackgroundColor} ;
    padding: 10px;
    display: flex;
    border-radius: 8px;
`
export const Emoji = styled.div`
    background-color: ${({theme}) => theme?.colors?.emojiBackgroundColor} ;
    border-radius: 50%;
    padding: 10px;
    display: inline;
`

export const NameInfo = styled.div`
    margin-left: 10px;
    text-align: left;
`

export const EmojiWrapper = styled.div`
    padding-top: 6px;
    margin: 0px 10px 10px 0px;
`

export const CommentSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0px;
    cursor: pointer;
`

export const TransparentInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme}) => theme?.colors?.secondary};
    font-weight: 500;
    font-size: ${({theme}) => theme?.colors?.secondary};
`
export const GhostInput = styled.input`
    border: none;
    outline: none;
    color: ${({theme}) => theme?.colors?.secondary};
    padding: 10px;
    background-color: transparent ;
    width: 100%;
`