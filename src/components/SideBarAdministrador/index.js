import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SideBarWrapper,
        SideBarMenu,SideBarLink,SideBtnWrap,SideBarRoute} from './SidebarElements';

const SideBarAdministrador = ({isOpen,toggle}) =>{
  return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}> Administrador </SideBarLink>
          <SideBarLink to="events" onClick={toggle}> Eventos </SideBarLink>
          <SideBarLink to="homework" onClick={toggle}> Tareas </SideBarLink>
          <SideBarLink to="pets_list" onClick={toggle}> Lista de caninos </SideBarLink>
          <SideBarLink to="app_users"onClick={toggle}> Usuarios App </SideBarLink>
          <SideBarLink to="sign_up" onClick={toggle}> Registro Administradores </SideBarLink>
         </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/singin"> iniciar sesion </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>

  );
}

export default SideBarAdministrador;
