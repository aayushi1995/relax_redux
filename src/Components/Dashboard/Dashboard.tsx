import React, { useState } from 'react'
import styled from 'styled-components'
import { Center, Typography } from '../commonStyles'
import Modal from '../CustomPortal/Modal'
import Post,{IPostCard} from './Post/Post'


const DashboardWrapper = styled.div`
    padding-top: 10%;
    width: 100%;
    max-width: 700px;
`


const Dashboard = () => {
    const [ openModal, setOpenModal ] = useState<boolean>(false);

    const [post, setPost] = useState([...defaultPost])
        
    // TODO : perform proper post and type safety
    const handlePostCreate = (content:string) => {
        setOpenModal(true)
    }

    return (
        <Center>
            <DashboardWrapper>
                <Typography color={'primary'} font_weight={500} text_transform={'inherit'} size={'xl'}>Hello Jane</Typography>
                <Typography color={'secondary'} font_weight={400} text_transform={'inherit'} size={'md'}>How are you doing today? Would you like to share something with the community 🤗</Typography>

                {/* <Post/> */}
                <Post id={'create'} isCreateMode={true} handlePostCreate={handlePostCreate}/>
                {post?.map((obj: IPostCard) => <Post key={obj?.id} {...obj} handlePostCreate={handlePostCreate}/>)}
                {/* React Portal Modal */}
                <Modal
                    isOpen={openModal}
                    setOpen={setOpenModal}
                />
            </DashboardWrapper>
        </Center>
       
    )
}


export default Dashboard


const defaultPost = [{
    id: '1',
    profilePic: "https://img.icons8.com/ios-filled/100/4D4D4D/user-female.png",
    name: 'Theresa Webb',
    content: {
        emoji: '👋',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    createdAt: 1694007097724,
    comments: 24,
    isEdited: false
},
{
    id: '2',
    profilePic: "https://img.icons8.com/ios-filled/100/4D4D4D/user-female.png",
    name: 'Marvin McKinney',
    content: {
        emoji: '😞',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    createdAt: 1694002591905,
    comments: 10,
    isEdited: true
},
{
    id: '3',
    profilePic: "https://img.icons8.com/ios-filled/100/4D4D4D/user-female.png",
    name: 'Marvin McKinney',
    content: {
        emoji: '😞',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    createdAt: 1694002591905,
    comments: 7,
    isEdited: false
}
]

