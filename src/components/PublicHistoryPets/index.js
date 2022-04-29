import React,{useState} from 'react';
import {Container,Wrapper,Icon,
        Card,ListIcon,H2,P,H22,ColumnCard
      } from './PublicHistoryPetsElements';
import Icon1 from '../../images/foundation.svg';

const PublicHistory= ({history}) => {
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
  return(
      <>
        <Container>
        <Icon to="/">Dogs</Icon>
        <H22>HISTORIAS</H22>
          <Wrapper>
            {history.map((mascota)=>{
              return(
                <Card key={mascota.id_historia}>
                  <ListIcon src={Icon1}/>
                  <H2>Hola yo soy {mascota.nombre}</H2>
                  <P>{mascota.descripcion} soy {mascota.raza}</P>
                  <P>publicada por:{mascota.usuario}</P>
                  <P></P>
                  <ColumnCard>
                  </ColumnCard>
                </Card>
              )
            })}
          </Wrapper>
        </Container>
      </>
  )
}

export default PublicHistory;
