import React,{useRef} from 'react'
import InputBox from '../InputBox/InputBox'
import { Center, Typography, Button, LinkStyled, CrossWrapper } from '../commonStyles'
import { IAuthenticationModal, LoginWrapper as RegisterWrapper } from '../Login/Login'
import {ReactComponent as Cross} from '../../images/svg/cross.svg'



const Register  = ({handleLinkClick:handleLoginClick, handleClose, showClose}: IAuthenticationModal) => { 

    const formRef = useRef() as any

    const emailRef = React.useRef<HTMLInputElement>(null);
    const userRef = React.useRef<HTMLInputElement>(null);
    const passRef =React.useRef<HTMLInputElement>(null);
    

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if(formRef.current.checkValidity()){
            // handleLoginData
            console.log(emailRef?.current != null && userRef?.current != null && passRef?.current != null && userRef?.current?.value, passRef?.current?.value)
        } else {
            formRef.current.reportValidity()
        }
    }

    return (
        <Center>
        {showClose && <CrossWrapper onClick={handleClose}>
            <Cross/>
        </CrossWrapper>}
        <RegisterWrapper onSubmit={handleSubmit} ref={formRef}>
                <Typography color={'lighterText'} font_weight={500} text_transform={'uppercase'} size={'sm'} >SIGN UP</Typography>
                <Typography> Create an account to continue </Typography>
                <br/><br/>
                <InputBox  key={`register_email`}  _id="email" type="email" label="Email" placeholder="Enter your email" isRequired={true} ref={emailRef} />
                <InputBox  key={`register_username`}  _id="username" type="text" label="Username" placeholder="Choose your preferred username" isRequired={true} ref={userRef} />
                <InputBox  key={`register_password`} _id="password" type="password" label="Password" placeholder="Choose your strong password" isRequired={true} ref={passRef} />
                <Button type="submit" is_full_width={true}>Continue</Button>
                <LinkStyled onClick={handleLoginClick}>Already have an account ? <div>Login</div> </LinkStyled>
        </RegisterWrapper>
        </Center>
    )
}




export default Register