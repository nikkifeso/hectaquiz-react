import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    height: 90px;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    position: relative;
`
export const Logotext = styled.span`
    height: 24px;
    margin-top: 8px;
    margin-left: 17px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: #42366D;
`

export const LogoDiv = styled.div`
    display: flex;
    margin-left: 60px;
    margin-top: 39px;
    height: 40px;
    @media only screen and (max-width: 450px){
        margin-left: 10px;
    }
`

export const LoginText = styled.span`
    width: 59px;
    height: 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding-left: 10px;
    color: #42366D;
`
export const LoginDiv = styled.div`
    display: flex;
    height: 52px;
    margin-top: 47px;
    margin-right: 52px;
    /* margin-left: 50%; */

    @media only screen and (max-width: 1200px){
        display: none;
    }

    /* @media only screen and (min-width: 1400px){
        margin-left: 5%;
    } */
`
export const HamburgerDiv = styled.div`
    display: flex;
    margin-left: 60px;
    margin-top: 39px;
    height: 40px;
    @media only screen and (min-width: 1200px){
        display: none;
    }
`

export const AccountDiv = styled.div`
    @media only screen and (max-width: 1200px){
        display: none;
    }
`

export const AvatarDiv = styled.div`
    display: flex;
    height: 52px;
    margin-top: 11px;
    /* margin-bottom: 25px; */
    margin-left: 61%;
`
export const UserText = styled.span`
    width: 165px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: flex-end;
    color: #42366D;
    margin-top: 45px;
    margin-bottom: 36px;
    margin-left: 14px;
    margin-right: 15px;
`
export const DropdownBtn = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    margin-top: 20px;
    margin-right: 70px;
`
export const RightNavDiv = styled.div`
    display: flex;  
    position: absolute;
    top: 0px;
    right:0; 
    bottom: 0;
`
