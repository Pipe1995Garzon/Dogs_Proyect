import React from 'react';
import Icon1 from '../../images/foundation.svg';
import Icon2 from '../../images/meet.svg';
import Icon3 from '../../images/poblation.svg';

import {ServicesContainer, ServicesH1,ServicesWrapper,
  ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './Services_Elements';

const Services = () =>{
  return (

      <ServicesContainer id="services">
        <ServicesH1>Cuales son nuestros objetivos</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2> Trabajar con las fundaciones </ServicesH2>
            <ServicesP>Uno de los objetivos de la App dogs, es Trabajar de la mano con las
            fundaciones para un bien común....</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2> Darnos a conocer </ServicesH2>
            <ServicesP>En la ciudad de neiva hay muchas personas que desconocen la existencia de
            de las fundaciones que ayudan a los caninos. Muchas de esas personas dispuestas a adoptar</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2> Reducir la poblacion  </ServicesH2>
            <ServicesP>Las personas entre más adopten y se obtenga la cultura de adopcion se reducira
            la reporduccion de caninos desprotegidos... </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>

  )
}

export default Services;
