import React from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton,Text} from './FundationRegistrationElements';

const FundationRegistration = () =>{
  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Bienvenido al formulario de registro de fundaciones</FormH1>
              <FormLabel htmlFor='for'>Nombre</FormLabel>
              <FormInput type='text'  required/>
              <FormLabel htmlFor='for'>representante Legal</FormLabel>
              <FormInput type='text'  required/>
              <FormInput type='text'  required/>
              <FormLabel htmlFor='for'>Identificacion CC</FormLabel>
              <FormInput type='text'  required/>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email'  required/>
              <FormButton>Vamos!!!!ingresa!</FormButton>
              <Text>Umm Olvidates tu contraseña??? te ayudo!!!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default FundationRegistration;
