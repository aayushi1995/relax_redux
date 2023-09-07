import React from "react";
import { Button, Typography } from "../../../commonStyles";
import { IPostCard } from "../Post";
import { CommentSection, ContentSection, Emoji, EmojiWrapper, GhostInput } from "../Post.styles";
import {ReactComponent as Comment} from '../../../../images/svg/chatBubble.svg'


interface IContent extends IPostCard{
    handlePostCreate?: (content:string) => void
}

const Content = ({
    id,
    content,
    comments = 0,
    isCreateMode = false,
    name,
    handlePostCreate
}: IContent) => {

    const textRef = React.createRef<HTMLInputElement>();

    return (
        <>
            {/* Post Text Section */}
            <ContentSection key={`${id}-content`}>
                <EmojiWrapper>
                    <Emoji>{isCreateMode ? "💬" : content?.emoji}</Emoji>
                </EmojiWrapper>
                {!isCreateMode ? <Typography size={'md'} color={'secondary'} fontWeight={400} textTransform={'inherit'} textAlign={'left'}>
                    {content?.content}
                </Typography>: <GhostInput ref={textRef}/>}
            </ContentSection>

            {/* POST button */}
             {isCreateMode ? (
                <div style={{display:'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={() => handlePostCreate && handlePostCreate(textRef?.current?.value ? textRef?.current?.value : '')}>Post</Button>
                </div>
            ) :  (
                
            // Comments
                <CommentSection>
                    <span><Comment/></span>
                    <span><Typography size={'sm'} color={'secondary'} fontWeight={500} textTransform={'inherit'} textAlign={'left'}>
                        {comments} comments
                    </Typography></span>
                </CommentSection>
            )}
        </>
       
    )
}

export default Content