import React,{useState,useEffect} from 'react';
import Icon1 from '../../images/foundation.svg';
import {Container,Wrapper,Icon,Card,ListIcon,H2,P} from './ListDogsElements';
//https://www.youtube.com/watch?v=fW-4toNg3jw

const ListDog = () =>{
  const [pets,setPets] = useState([]);
  useEffect(()=>{
    const getPets = () =>{
      fetch('http://localhost:3500/gestion_mascotas/lista_mascotas').then(res=>res.json()).then(res=>console.log(res))
    }
    getPets();
  },[])

  return(
    <>
      <Container>
      <Icon to="/">Dogs</Icon>
        <Wrapper>
          <Card>
            <ListIcon src={Icon1}/>
            <H2>Estrella</H2>
            <P>....</P>

          </Card>
        </Wrapper>
      </Container>
    </>
  )
}

export default ListDog;
