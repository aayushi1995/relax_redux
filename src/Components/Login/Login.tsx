import React,{MouseEventHandler, useRef} from 'react'
import styled from 'styled-components'
import InputBox from '../InputBox/InputBox'
import { Center, Typography, Button, LinkStyled, CrossWrapper } from '../commonStyles'
import {ReactComponent as Cross} from '../../images/svg/cross.svg'

export interface IAuthenticationModal {
    handleLinkClick: MouseEventHandler<HTMLButtonElement>
    handleClose?: React.MouseEventHandler<HTMLDivElement> 
    showClose?:boolean
}


const Login  = ({handleLinkClick: handleRegisterClick, handleClose, showClose}: IAuthenticationModal) => { 

    const formRef = useRef() as any
    const userRef = React.useRef<HTMLInputElement>(null);
    const passRef =React.useRef<HTMLInputElement>(null);
    

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if(formRef.current.checkValidity()){
            // handleLoginData
            console.log(userRef?.current != null && passRef?.current != null && userRef?.current?.value, passRef?.current?.value)
        } else {
            formRef.current.reportValidity()
        }
    }

    return (
        <Center>
        {showClose && <CrossWrapper onClick={handleClose}>
            <Cross/>
        </CrossWrapper>}
        
        <LoginWrapper onSubmit={handleSubmit} ref={formRef}>
                <Typography color={'lighterText'} font_weight={500} text_transform={'uppercase'} size={'sm'} >Welcome Back</Typography>
                <Typography> Log into your account </Typography>
                <br/><br/>
                <InputBox key={`login_username`} _id="username" type="text" label="Email / UserName" placeholder="Enter your email or username" isRequired={true} ref={userRef} />
                <InputBox key={`login_password`} _id="password" type="password" label="Password" placeholder="Enter your password" isRequired={true} ref={passRef} />
                <ForgotPasswordLink>forgot password ?</ForgotPasswordLink>
                <Button type="submit" is_full_width={true}>Login now</Button>
                <LinkStyled onClick={handleRegisterClick}>Not registered yet? <div>Register</div> </LinkStyled>
                <br/><br/>
        </LoginWrapper>
        </Center>
    )
}


// TODO : fix the type error
export const LoginWrapper = styled.form<any>`
    width: 500px;
    padding: 20px;
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(129.28deg, #969696 0.61%, #343434 99.27%);
    background: linear-gradient(0deg, #27292D, #27292D),
    linear-gradient(129.28deg, #969696 0.61%, #343434 99.27%);

    @media only screen and (max-width: 600px) {
        width:100%;
        max-width: 300px;
    }
`


const ForgotPasswordLink = styled.div`
    color: ${({ theme }) => theme.colors.primary}; 
    font-size: 12px;
    font-weight: 500;
    text-align: right;
    padding: 10px 0px;
    cursor: pointer;
`

export default Login