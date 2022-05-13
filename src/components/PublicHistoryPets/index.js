import React,{useState} from 'react';
import {Container,Wrapper,Icon,
        Card,ListIcon,H2,P,H22,ColumnCard
      } from './PublicHistoryPetsElements';


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
                  <ListIcon src={'http://localhost:3500/'+mascota.foto}/>
                  <H2>{mascota.nombre}</H2>
                  <P>{mascota.descripcion}</P>
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
