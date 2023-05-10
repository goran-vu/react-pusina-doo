import React,{useState} from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import "@fontsource/encode-sans-expanded";
import Mehanizacija from '../components/Mehanizacija'


const Home = () => {
    const [isOpen, setIsOpen]= useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Mehanizacija/>
    </>
  )
}

export default Home;