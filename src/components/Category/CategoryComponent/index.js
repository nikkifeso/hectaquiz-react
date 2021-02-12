import React,{useState} from 'react';
import {CategoryDiv,IconDiv, Text,ArrowStyle} from './style';
import {FaVolleyballBall, FaHistory,FaMusic, FaQuestionCircle} from 'react-icons/fa';
import {BsFilm} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import {GiMaterialsScience} from 'react-icons/gi';


const Category=({category,icon})=>{
    const [arrow, setArrow] = useState(false)

    return (
        <CategoryDiv 
            onMouseEnter={()=>setArrow(true)}
            onMouseLeave={()=>setArrow(false)}>
            <IconDiv>
            {
                (()=>{
                    switch(icon){
                        case 'fqc':
                            return <FaQuestionCircle style={{margin:"11px"}}/>;
                        case 'fam':
                            return <FaMusic style={{margin:"11px"}}/>;
                        case 'bsf':
                            return <BsFilm style={{margin:"11px"}}/>;
                        case 'biw':
                            return <BiWorld style={{margin:"11px"}}/>;
                        case 'fvb':
                            return <FaVolleyballBall style={{margin:"11px"}}/>;
                        case 'fah':
                            return <FaHistory style={{margin:"11px"}}/>;
                        default:
                            return <GiMaterialsScience style={{margin:"11px"}}/>
                    }
                }) ()
            }
            </IconDiv>
            <Text>{category}</Text>
        {
            arrow && (
                <ArrowStyle/>
            )
        }
        </CategoryDiv>
    )
}

export default Category;