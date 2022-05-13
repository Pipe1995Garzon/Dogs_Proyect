import React from 'react';
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,
        FooterLinksItems, FooterLinksTitle,FooterLink, SocialMedia, SocialMediaWrap,
        SocialLogo,WebSitesRights, SocialIcons, SocialIconsLink} from './FooterElements';

const FooterAdministrador = () =>{
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Informacion</FooterLinksTitle>
                <FooterLink to ="/signin">Justificacion</FooterLink>
                <FooterLink to ="/signin">¿Quienes Somos?</FooterLink>
                <FooterLink to ="/signin"> ¿Quieres contribuir? </FooterLink>
                <FooterLink to ="/signin"> Descarga la app!!! </FooterLink>
                <FooterLink to ="/signin"> Como trabajar con nosotros </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Nuestras redes sociales</FooterLinksTitle>
                <FooterLink to ="/signin">Facebook</FooterLink>
                <FooterLink to ="/signin">Instagram</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contacto con el programador</FooterLinksTitle>
                <FooterLink to ="/signin">Email</FooterLink>
                <FooterLink to ="/signin">Telefono</FooterLink>
                <FooterLink to ="/signin"> Preguntas </FooterLink>
                <FooterLink to ="/signin"> Soporte </FooterLink>
                <FooterLink to ="/signin"> Como trabajar con nosotros </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/administradorDogs">
              Usuario Dogs🐾
            </SocialLogo>
            <WebSitesRights>
              Dogs © {new Date().getFullYear()} todos los derechos reservados.
            </WebSitesRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" arialabel="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" arialabel="Instagram">
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" arialabel="You tu be">
                <FaYoutube />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default FooterAdministrador;
