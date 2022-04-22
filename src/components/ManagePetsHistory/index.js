import React,{useState} from 'react';
import {Container,Wrapper,Icon,
        Card,ListIcon,H2,P,H22,ColumnCard,
        FormButtonVerMascota,FormButtonEditarHistoria,
       FormButtonEliminarHistoria} from './ManagePetsHistoryElements';
import Icon1 from '../../images/foundation.svg';

const ManagePetsHistory= ({historiaMascotas}) => {
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
  return(
      <>
        <Container>
        <Icon to="/administradorDogs">Dogs</Icon>
        <H22>GESTIONAR HISTORIAS DE MASCOTAS</H22>
          <Wrapper>
            {historiaMascotas.map((mascota)=>{
              return(
                <Card>
                  <ListIcon src={Icon1}/>
                  <H2>{mascota.nombre}</H2>
                  <P>{mascota.historia}</P>
                  <ColumnCard>
                  <FormButtonVerMascota
                    onMouseEnter={onHover}  onMouseLeave={onHover}
                    primary='true' dark='true' smooth={true}
                    duration={500} spy={true}  exact={true}
                    offset={-80} activeClass='active'>
                    Ver historia
                 </FormButtonVerMascota>
                 <FormButtonEditarHistoria
                   onMouseEnter={onHover}  onMouseLeave={onHover}
                   primary='true' dark='true' smooth={true}
                   duration={500} spy={true}  exact={true}
                   offset={-80} activeClass='active'>
                   Editar historia
                </FormButtonEditarHistoria>
                  <FormButtonEliminarHistoria
                    onMouseEnter={onHover}  onMouseLeave={onHover}
                    primary='true' dark='true' smooth={true}
                    duration={500} spy={true}  exact={true}
                    offset={-80} activeClass='active' >
                    Eliminar....
                  </FormButtonEliminarHistoria>
                  </ColumnCard>
                </Card>
              )
            })}
          </Wrapper>
        </Container>
      </>
  )
}

export default ManagePetsHistory;
