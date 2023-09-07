import React, { Dispatch, SetStateAction, useState } from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import CustomPortal from './CustomPortal';

interface IModal {
   isOpen: boolean,
   setOpen: Dispatch<SetStateAction<boolean>>,
}

const Modal = ({isOpen, setOpen}: IModal) => {
    
    const [showLogin, setShowLogin] = useState(true)

    const handleToggleLogin = (value:boolean) => {
        setShowLogin(value)
    }
    
    const handleClose = () => {
        setOpen(false)
    }


    if (!isOpen) return null;

    return (
        <CustomPortal wrapperId="custom-react-portal">
            {showLogin ? <Login handleClose={handleClose} handleLinkClick={() => handleToggleLogin(false)} showClose={true}/>
            :<Register handleClose={handleClose} handleLinkClick={() => handleToggleLogin(true)} showClose={true}/>}
        </CustomPortal>
    )
}
export default Modal