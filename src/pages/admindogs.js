import React,{useState} from 'react';
import NavbarAdministrador from '../components/NavAdministrador';
import SideBarAdministrador from '../components/SideBarAdministrador';
import WelcomeAdministrador from '../components/WelcomeAdministrador';
import InfoSectionAdministrador from '../components/InforSectionAdministrador';
import InfoSection2Administrador from '../components/InfoSection2Administrador';
import {homeObjOneAdministrador} from '../components/InforSectionAdministrador/Data';
import {homeObjTwoAdmin} from '../components/InfoSection2Administrador/Data';
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
      <InfoSection2Administrador {...homeObjTwoAdmin}/>
      <FooterAdministrador/>
    </>
  )
}

export default AdminDogs;
