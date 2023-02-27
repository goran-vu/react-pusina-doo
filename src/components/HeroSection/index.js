import React,{useState} from 'react'
import Background from '../../images/p1.jpg'
import BgLogoImg from '../../images/Slika2.png'

import {Button} from '../ButtonElement';
import {
    HeroBg,
    HeroContainer,
    ImgBg,
    BgLogo,
    HeroButtonWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
const HeroSection = () => {
    const[hover,setHover]=useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={Background}/>
        <BgLogo src={BgLogoImg}/>
      </HeroBg>
      <HeroButtonWrapper>
        <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}>
            Kontakt{hover ? 
            <ArrowForward/>:
            <ArrowRight/> }
        </Button>
      </HeroButtonWrapper>
    </HeroContainer>
  )
}

export default HeroSection
