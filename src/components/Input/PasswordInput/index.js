import React, {useState} from 'react';
import { Inputstyle, InputDiv } from '../style';
import { EyeStyle} from './style';


const Password =({text})=>{
    const [visible, setVisible] = useState(false)
    const handleClick =()=>{
        setVisible(!visible)
    }
    return (
        <InputDiv>
            <Inputstyle  type={visible ? "text":"password"} placeholder ={text} /><EyeStyle size={20} onClick={handleClick}/>
        </InputDiv>
    )
}
export default Password