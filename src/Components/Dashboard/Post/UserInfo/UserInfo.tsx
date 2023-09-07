import { IPostCard } from "../Post"
import {timeAgo} from '../../../../utils/utils'
import {NameInfo, ProfilePic, UserInfoSection} from '../Post.styles'
import { Button, Typography } from "../../../commonStyles"
import {ReactComponent as MoreOptions} from '../../../../images/svg/moreoptions.svg'

const DEFAULTPIC = 'https://img.icons8.com/ios-filled/100/4D4D4D/user-female.png'

interface IUserInfo extends IPostCard {
    handleMoreOptions?: (state: boolean) => void
}

const UserInfo = ({
    id,
    profilePic = DEFAULTPIC,
    name,
    isEdited = false,
    isEditMode = false,
    isCreateMode = false,
    createdAt,
    handleMoreOptions
}: IUserInfo) => {
    return (
        <UserInfoSection key={`${id}-userinfo`}>
            <UserInfoSection>
                {!isCreateMode && <ProfilePic src={profilePic} alt="user profile"/>}
                <NameInfo>
                    <Typography size={'md'} color={'primary'} font_weight={500} text_transform={'inherit'}>{isCreateMode ? "Create Post" : name}</Typography>
                    {!isCreateMode && <Typography size={'sm'} color={'secondary'} font_weight={500} text_transform={'inherit'}>{createdAt && timeAgo(createdAt)} {isEdited ? ' . Edited' : ''}</Typography>}
                </NameInfo>
            </UserInfoSection>
            {!isCreateMode && <Button type={'ghost'} onClick={() => handleMoreOptions && handleMoreOptions(true)}><MoreOptions style={{cursor: 'pointer'}} /></Button>}
        </UserInfoSection>
    )
}

export default UserInfo