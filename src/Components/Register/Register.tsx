import React,{useRef} from 'react'
import InputBox from '../InputBox/InputBox'
import { Center, Typography, Button, LinkStyled, CrossWrapper } from '../commonStyles'
import { IAuthenticationModal, LoginWrapper as RegisterWrapper } from '../Login/Login'
import {ReactComponent as Cross} from '../../images/svg/cross.svg'



const Register  = ({handleLinkClick:handleLoginClick, handleClose, showClose}: IAuthenticationModal) => { 

    const formRef = useRef() as any

    const emailRef = React.createRef<HTMLInputElement>();
    const userRef = React.createRef<HTMLInputElement>();
    const passRef =React.createRef<HTMLInputElement>();
    

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
        <RegisterWrapper ref={formRef}>
                <Typography color={'lighterText'} fontWeight={500} textTransform={'uppercase'} size={'sm'} >SIGN UP</Typography>
                <Typography> Create an account to continue </Typography>
                <br/><br/>
                <InputBox _id="email" type="email" label="Email" placeholder="Enter your email" isRequired={true} inputRef={emailRef} />
                <InputBox _id="username" type="text" label="Username" placeholder="Choose your preferred username" isRequired={true} inputRef={userRef} />
                <InputBox _id="password" type="password" label="Password" placeholder="Choose your strong password" isRequired={true} inputRef={passRef} />
                <Button type="submit" isFullWidth={true} onClick={handleSubmit}>Continue</Button>
                <LinkStyled onClick={handleLoginClick}>Already have an account ? <div>Login</div> </LinkStyled>
        </RegisterWrapper>
        </Center>
    )
}




export default Register