import React from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton,Text} from './SigninElements';

const SignIn = () =>{
  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Iniciar Sesion</FormH1>
              <FormLabel htmlFor='for'>Correo electronico</FormLabel>
              <FormInput type='email'  required/>
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
              <FormInput type='password'  required/>
              <FormButton>Ingresar</FormButton>
              <Text>Olvidates tu contraseña??? te ayudo!!!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
