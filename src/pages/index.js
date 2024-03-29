import React,{useState} from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import "@fontsource/encode-sans-expanded";
import Mehanizacija from '../components/Mehanizacija'
import Reference from '../components/Reference';
import Gallery from '../components/Gallery';
import Map from '../components/Map';


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
        <Reference/>
        <Gallery/>
        <Map/>
    </>
  )
}

export default Home;