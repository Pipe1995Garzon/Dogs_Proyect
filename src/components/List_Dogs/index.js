import React from 'react';
import Icon1 from '../../images/foundation.svg';
import {Container,Wrapper,Icon,Card,ListIcon,H2,P,ColumnCard } from './ListDogsElements';

const ListDog = ({ pets }) =>{

  return(
    <>
      <Container>
      <Icon to="/">Dogs</Icon>
        <Wrapper>
        {pets.map(pet => (
            <Card key={pet.id_dog}>
              <ListIcon src={'http://localhost:3500/'+pet.foto}/>
              <H2>{pet.nombre}</H2>
              <P>Edad: {pet.edad}</P>
              <P>Raza: {pet.raza}</P>
              <P>Vacuna: {pet.vacuna}</P>
              <P> {pet.nombre} {pet.estado}</P>
              <P>Descripcion:</P>
              <P>{pet.descripcion}</P>
              <P>Contacto:{pet.usuario}</P>
              <P>{pet.numero_contacto}</P>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export default ListDog;
