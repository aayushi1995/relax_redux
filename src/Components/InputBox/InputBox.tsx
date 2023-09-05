
import React, { useState, forwardRef, KeyboardEventHandler } from 'react'
import styled from 'styled-components'
import {ReactComponent as OpenEye} from '../../assests/eye.svg'
import {ReactComponent as CloseEye} from '../../assests/hideeye.svg'
import { PositionRelative } from '../commonStyles'

// type
interface IInput {
    _id: string
    type:string
    label: string
    inputRef?: React.RefObject<HTMLInputElement>
    handleChange?: KeyboardEventHandler<HTMLInputElement>
    placeholder?:string
    isRequired?:boolean
}

//styles
const TextBoxWrapper = styled.div`
    text-align:left;
`

const LabelStyled = styled.div`
    font-size : ${({ theme }) => theme.fontSize.sm};
    color : ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    padding: 10px 0px;
`

const InputBoxStyled = styled.input`
    box-sizing: border-box;
    font-size : ${({ theme }) => theme.fontSize.md};
    color : ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    outline: none;
    background: transparent ;
    font-weight: 500;
    padding: 10px;
    width: 100%;
`

const PasswordIcon = styled.div`
    position: absolute;
    top:10px;
    right: 10px;
    cursor: pointer;
`


const InputBox = forwardRef(({_id, type, label, inputRef, placeholder, isRequired, handleChange}:IInput) => {

    const [show, setShow] = useState(false)

    const handleToggle = (value:boolean) => {
        setShow(value)
    }

    return (
        <TextBoxWrapper>
            <label htmlFor={_id}>
                <LabelStyled>{label}</LabelStyled>
                <PositionRelative>
                    <InputBoxStyled type={(type === "password") ? (show ? 'text' : `${type}`): type} placeholder={placeholder} id={_id} ref={inputRef} required={isRequired} onKeyDown={handleChange}/>
                    {type === "password" && <PasswordIcon> 
                        {!show ? <OpenEye onClick={() => handleToggle(true)}/> : <CloseEye onClick={() => handleToggle(false)}/>}
                    </PasswordIcon>
                    }
                </PositionRelative>
            </label>
        </TextBoxWrapper>
    )
})

export default InputBox