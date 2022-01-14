import styled from 'styled-components';

export const PageDiv = styled.div`
    position:relative; 
    height: 100%;     
`
export const BackgroundStyle = styled.img`
    position: absolute;
    top: 0px;
    right:0; 
    bottom: 0;
    z-index: -1;

    @media only screen and (max-width: 1200px){
        display: none;   
    }
`

export const BackgroundMobile1 = styled.img`
    @media only screen and (min-width: 1200px){
        display: none;
    }

    @media only screen and (max-width: 1200px){ 
        position: absolute;
        width: 100%;
        z-index: -1;     
    }
`

export const BrainDesign = styled.img`
    position: absolute;
    top: 90px;
    right:0; 
    bottom: 0;
    z-index: -1;
    @media only screen and (max-width: 1200px){
        display: none;
    }
`
export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 151px;
    margin-left: 60px;

    @media only screen and (min-width : 400px) and (max-width : 450px){
        margin-top: 10%;
        margin-left: 10px;
    }
    @media only screen and (min-width : 320px) and (max-width : 400px){
        margin-top: 33%;
        margin-left: 10px;
    }
    @media only screen and (max-width : 320px){
        margin-top: 3%;
        margin-left: 10px;
    }
`
export const MenuDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: white;
    margin-left: 60px;
    @media only screen and (max-width : 450px){
        margin-left: 10px;
    }     
`

export const BoldText = styled.span`
    width: 308px;
    height: 219px;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    display: flex;
    align-items: flex-end;
    color: #42366D;

    @media only screen and (max-width: 450px){
        display: none;
    }
`
export const BoldTextSmall = styled.span`
    width: 320px;
    height: 219px;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    display: flex;
    align-items: flex-end;
    color: #42366D;

    @media only screen and (min-width: 300) and (max-width: 400px){
        width: 280px;
        font-size: 50px;
        line-height: 49px;
    }

    @media only screen and (max-width: 300px){
        width: 250px;
        font-size: 40px;
        line-height: 50px;
    }

    @media only screen and (min-width: 450px){
        display: none;
    }
`

export const SmallText = styled.span`
    width: 450px;
    height: 48px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-top: 60px;
    display: flex;
    align-items: flex-end;
    color: #42366D;

    @media only screen and (max-width: 450px){
        width: 300px;
        height: 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
    @media only screen and (max-width: 280px){
        font-size: 12px;
        margin-top: 23px;
        width: 270px;
    }
`

export const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-left: 40px;
    @media only screen and (max-width: 450px){
        margin-left: -10px;
    }
`

export const BottomDesignLeft = styled.img`
    position: absolute;
    left:0; 
    /* bottom: 0px; */
    z-index: -1;

    @media only screen and (min-width: 540px){
        display: none;
    }
`
export const BottomDesignRight = styled.img`
    position: absolute;
    right:0;  
    /* bottom: 0; */
    z-index: -1;
    overflow: hidden;

    @media only screen and (min-width: 540px){
        display: none;
    }
`