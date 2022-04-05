import React from 'react';
import Icon1 from '../../images/foundation.svg';
import Icon2 from '../../images/meet.svg';
import Icon3 from '../../images/poblation.svg';

import {ListPetsContainer, ListPetsH1,ListPetsWrapper,
  ListPetsCard,ListPetsIcon,ListPetsH2,ListPetsP} from './ListpetElements';

const ListPets = () =>{
  return (

      <ListPetsContainer>
        <ListPetsH1>Cuales son nuestros objetivos</ListPetsH1>
        <ListPetsWrapper>
          <ListPetsCard>
            <ListPetsIcon src={Icon1}/>
            <ListPetsH2> Trabajar con las fundaciones </ListPetsH2>
            <ListPetsP>Uno de los objetivos de la App dogs, es Trabajar de la mano con las
            fundaciones para un bien común....</ListPetsP>
          </ListPetsCard>
        </ListPetsWrapper>
      </ListPetsContainer>

  )
}

export default ListPets;
