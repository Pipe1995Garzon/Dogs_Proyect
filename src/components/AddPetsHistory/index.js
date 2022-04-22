import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,
        LinkLabel,Formfile,Formtextarea} from './AddPetsHistoryElements';

const  AddHistoryPets = () =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  const [user, setUser] = useState({
    email:"",
    password:"",
  });


  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/administradorDogs">Dogs</Icon>
          <FormContent>
            <Form>
              <FormLabel htmlFor='for'>Nombre de la mascota</FormLabel>
              <FormInput
                type='text'
                name='nombremascota'
                placeholder="Pelusa"
                required/>
              <FormLabel htmlFor='for'>Subir Foto</FormLabel>
              <Formfile id="fileinput"  type='file' name="fotomascota"/>
              <FormLabel htmlFor='for'>Historia de la mascota</FormLabel>
              <Formtextarea
                type="text"
                name='nombremascota'
                placeholder="Historia de pelusa"
                required/>
              <FormButton
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClass='active'>
               Ingresar
              </FormButton>
              <LinkLabel href="/administradorDogs">Volver</LinkLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
export default AddHistoryPets;
