import React from 'react';
import Icon1 from '../../images/foundation.svg';
import Icon2 from '../../images/meet.svg';
import Icon3 from '../../images/poblation.svg';
import LoadPets from '../ListPets';

import {ServicesContainer, ServicesH1,ServicesWrapper,
  ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './Services_Elements';

const Services = () =>{
  return (

      <ServicesContainer id="services">
        <ServicesH1>Cuales son nuestros objetivos</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2> Trabajar con las fundaciones caninas </ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2> Darnos a conocer </ServicesH2>
            <ServicesP>A todas las personas</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2> Reducir la poblacion  </ServicesH2>
            <ServicesP>Mascotas abandonadas</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>

  )
}

export default Services;
