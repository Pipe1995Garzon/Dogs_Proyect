import React from 'react';
import Icon1 from '../../images/foundation.svg';
import {Container,Wrapper,Icon,Card,ListIcon,H2,P} from './ListDogsElements';

const ListDog = ({ pets }) =>{

  return(
    <>
      <Container>
      <Icon to="/">Dogs</Icon>
        <Wrapper>
        {pets.map(pet => (
            <Card key={pet.id_dog_custodia}>
              <ListIcon src={Icon1}/>
              <H2>{pet.nombre}</H2>
              <P>{pet.historia}</P>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export default ListDog;
