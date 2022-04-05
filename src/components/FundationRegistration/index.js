import React,{useState} from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton,Text} from './FundationRegistrationElements';

const RegisFundation = () =>{

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Formulario de registro</FormH1>
              <FormLabel htmlFor='for'>Nombre Fundacion</FormLabel>
              <FormInput type='text' placeholder="fundacion:::"  required/>
              <FormLabel htmlFor='for'>NIT</FormLabel>
              <FormInput type='number' placeholder="NIT" required/>
              <FormLabel htmlFor='for'>Nombre completo representante</FormLabel>
              <FormInput type='text' placeholder="Nombres" required/>
              <FormLabel htmlFor='for'>Identificacion</FormLabel>
              <FormInput type='number' placeholder="CC" required/>
              <FormLabel htmlFor='for'>Correo Electronico</FormLabel>
              <FormInput type='email' placeholder="ejemplo@ejemplo.com"  required/>
              <FormLabel htmlFor='for'>Usuario</FormLabel>
              <FormInput type='text'  placeholder="User" required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' placeholder="your password"  required/>
              <FormButton onMouseEnter={onHover}  onMouseLeave={onHover}
              primary='true' dark='true' smooth={true}
               duration={500} spy={true}  exact={true} offset={-80} activeClass='active' >Registrar</FormButton>
              <Text>Muchas gracias por unirte al proyecto DOGS!</Text>
              <FormInput type='hidden'/>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default RegisFundation;
