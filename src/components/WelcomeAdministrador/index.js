import React, { useState } from 'react';
import {useAuth} from '../../context/authContext';
import Video from '../../Video/Videos.mp4';
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

const WelcomeAdministrador = () => {
  const [hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  const {user} = useAuth()

  return(
    <WelcomeContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Bienvenido a Dogs..</WelcomeH1>
        <WelcomeP>{user.email}</WelcomeP>
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

export default WelcomeAdministrador;
