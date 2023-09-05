import React,{useRef} from 'react'
import styled from 'styled-components'
import InputBox from '../InputBox/InputBox'
import { Center, Greeting, Button, LinkStyled } from '../commonStyles'



const Register  = () => { 

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
        <LoginWrapper ref={formRef}>
                <Greeting primary={true}>SIGN UP</Greeting>
                <Greeting> Create an account to continue </Greeting>
                <br/><br/>
                <InputBox _id="email" type="email" label="Email" placeholder="Enter your email" isRequired={true} inputRef={emailRef} />
                <InputBox _id="username" type="text" label="Username" placeholder="Choose your preferred username" isRequired={true} inputRef={userRef} />
                <InputBox _id="password" type="password" label="Password" placeholder="Choose your strong password" isRequired={true} inputRef={passRef} />
                <Button type="submit" isFullWidth={true} onClick={handleSubmit}>Continue</Button>
                <LinkStyled>Already have an account ? <div>Login</div> </LinkStyled>
        </LoginWrapper>
        </Center>
    )
}


// TODO : fix the type error
const LoginWrapper = styled.form<any>`
    width: 500px;
    padding: 20px;
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(129.28deg, #969696 0.61%, #343434 99.27%);
    background: linear-gradient(0deg, #27292D, #27292D),
    linear-gradient(129.28deg, #969696 0.61%, #343434 99.27%);
`


export default Register