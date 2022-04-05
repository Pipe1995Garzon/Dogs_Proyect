import React, { useState } from 'react';
import Video from '../../Video/video1.mp4';
import { Button } from '../ButtonElements';
import {
  WelcomeContainer,
  WelcomeBg,VideoBg,
  WelcomeContent,
  WelcomeH1,
  WelcomeP,
  WelcomeBtnWrapper,
  ArrowForward,
  ArrowRight
} from './WelcomeElements';

const Welcome = () => {
  const [hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
  return(
    <WelcomeContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Te doy la bienvenida a Dogs......</WelcomeH1>
        <WelcomeP>Resgistrate y empieza a trabajar con nosotros</WelcomeP>
      <WelcomeBtnWrapper>
        <Button to="regisfundation" onMouseEnter={onHover}
         onMouseLeave={onHover} primary='true'
          dark='true' smooth={true}
           duration={500} spy={true}
           exact={true} offset={-80} activeClass='active'>
          registrarme {hover ? <ArrowForward/> : <ArrowRight/>}
        </Button>
      </WelcomeBtnWrapper>
      </WelcomeContent>
    </WelcomeContainer>
  );
}

export default Welcome;
