
import React from 'react'
import Content from './Content/Content'
import { CardWrapper } from './Post.styles'
import UserInfo from './UserInfo/UserInfo'


export interface IPostCard {
    id: string,
    profilePic?: string,
    name?: string,
    content?: {
        emoji: string,
        content: string
    },
    createdAt?: number,
    comments?: number,
    isEdited?: boolean
    isEditMode?:boolean,
    isCreateMode?:boolean
    handlePostCreate?: (content:string) => void
}


const Post = (props: IPostCard) => {
    let {
        id,
        handlePostCreate
    } = props

    const handleMoreOptions = (state:boolean) => {
        console.log(state, 'edit, deleted')
    }
    
   
    return (
        <CardWrapper key={id}>
            {/* User Info Section */}
            <UserInfo {...props} handleMoreOptions={handleMoreOptions} />
            {/* Content section */}
            <Content {...props} handlePostCreate={handlePostCreate} />
        </CardWrapper>
    )
}

export default Post