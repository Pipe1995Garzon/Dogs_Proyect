import React,{useState} from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton} from './SigninElements';
//import {useAuth} from '../../context/authContext';

const SignIn = () =>{

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  //const {user} = useAuth()
  //console.log(user);
  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Iniciar Sesion</FormH1>
              <FormLabel htmlFor='for'>Correo electronico</FormLabel>
              <FormInput type='email' name='email'  placeholder="ejemplo@ejemplo.com" required/>
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
              <FormInput type='password' name='password' placeholder="password"  required/>
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
