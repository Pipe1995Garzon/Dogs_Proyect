import React,{useState} from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton} from './SigninElements';

const SignIn = () =>{
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
              <FormH1>Iniciar Sesion</FormH1>
              <FormLabel htmlFor='for'>Correo electronico</FormLabel>
              <FormInput type='email' placeholder="ejemplo@ejemplo.com" required/>
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
              <FormInput type='password' placeholder="password"  required/>
              <FormButton onMouseEnter={onHover}  onMouseLeave={onHover}
               primary='true' dark='true' smooth={true}
               duration={500} spy={true}  exact={true} offset={-80} activeClass='active'>Ingresar</FormButton>

            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
