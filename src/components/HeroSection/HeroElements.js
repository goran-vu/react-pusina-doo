import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const HeroContainer=styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-top: -80px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HeroBg=styled.div`
    position: absolute;
    top: 0;
    right: 0%;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg=styled.img`
     position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`
export const BgLogo=styled.img`
    position: absolute;
    width: 60%;
   
    left: 0;
    right: 0;
    top: -150px;
    bottom: 0;
    margin: auto;
    @media screen and (max-width: 768px) {
    
    width: 70%;
   }
   @media screen and (max-width: 480px) {
    
    width: 90%;
   }
   
`

export const HeroButtonWrapper=styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
`

export const ArrowForward=styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight=styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`