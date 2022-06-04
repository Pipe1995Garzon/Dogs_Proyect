import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SideBarWrapper,
        SideBarMenu,SideBarLink,SideBtnWrap,SideBarRoute} from './SidebarElement';

const SideBar = ({isOpen,toggle}) =>{
  return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}> Historias </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}> Adopta </SideBarLink>
          <SideBarLink to="services" onClick={toggle}> Objetivos </SideBarLink>
          <SideBarLink to="register" onClick={toggle}> App </SideBarLink>
          <SideBarLink to="register"onClick={toggle}> Usuarios App </SideBarLink>
         </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin"> Ingresar</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>

  );
}

export default SideBar;
