import React, {useState} from 'react';
import { Inputstyle, InputDiv } from '../style';
import {Button} from './style';
import {BsEyeSlash, BsEye} from 'react-icons/bs'


const Password =({text})=>{
    const [visible, setVisible] = useState(false)
    const handleClick =()=>{
        setVisible(!visible)
    }
    return (
        <InputDiv>
            <Inputstyle  type={visible ? "text":"password"} placeholder ={text} />
            <Button onClick={handleClick}>
                {visible ? <BsEye size={24}/>:<BsEyeSlash size={24}/>}       
            </Button>
        </InputDiv>
    )
}
export default Password