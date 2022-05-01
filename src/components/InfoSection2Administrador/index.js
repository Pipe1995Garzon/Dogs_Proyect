import React from 'react';
import { ButtonSection2 } from '../ButtonElements';
import {InfoContainer,
        InfoWrapper,
        InfoRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,

      } from './InfoElements2';
import { ButtonAdminPictures } from '../ButtonElements';
import LogoSection from '../../images/Dog4.svg';
const InfoSection2Administrador = ({
  lightBg,id,imgStart,topLine,
  lightText,headline,darkText,description,
  buttonLabel,buttonLabel2,img,alt,primary,dark,dark2
  }) =>{
  return(
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonSection2 to='/adddogs'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-60}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</ButtonSection2>
                  <ButtonSection2 to='/gestionarmascotas'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-60}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{buttonLabel2}</ButtonSection2>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection2Administrador;
