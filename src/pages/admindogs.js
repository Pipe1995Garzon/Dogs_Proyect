import React,{useState} from 'react';
import NavbarAdministrador from '../components/NavAdministrador';
import SideBarAdministrador from '../components/SideBarAdministrador';
import WelcomeAdministrador from '../components/WelcomeAdministrador';
import InfoSectionAdministrador from '../components/InforSectionAdministrador';
import {homeObjOneAdministrador} from '../components/InforSectionAdministrador/Data';
import FooterAdministrador from '../components/FooterAdministrador';


const AdminDogs = () =>{
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return(
    <>
      <NavbarAdministrador toggle={toggle}/>
      <SideBarAdministrador isOpen={isOpen} toggle={toggle}/>
      <WelcomeAdministrador/>
      <InfoSectionAdministrador {...homeObjOneAdministrador}/>
      <FooterAdministrador/>
    </>
  )
}

export default AdminDogs;
