import React,{useState} from 'react';
import Navbar from '../components/Nav_bar';
import SideBar from '../components/SideBar';
import Welcome from '../components/Welcome_section';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import Services from '../components/Services';
import {homeObjOne} from '../components/InfoSection/Data';
import {homeObjTwo} from '../components/InfoSection2/Data';
import {homeObjThree} from '../components/InfoSection3/Data';
import Footer from '../components/Footer';


const Home = () =>{
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return(
    <>
      <Navbar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Welcome/>
      <InfoSection {...homeObjOne}/>
      <InfoSection2 {...homeObjTwo}/>
      <Services/>
      <InfoSection3 {...homeObjThree}/>
      <Footer/>
    </>
  )
}

export default Home;
