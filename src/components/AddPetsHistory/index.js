import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,Select,
        LinkLabel,Formfile,Formtextarea} from './AddPetsHistoryElements';

const  AddHistoryPets = () =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
//guardar los valores que traen los inputs
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
//trae los datos de los inputs
  const handleChange = ({target: {name,value}}) =>
    setUser({...user, [name]:value})


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
                name='nombre'
                placeholder="Pelusa"
                onChange={handleChange}
                required/>
              <FormLabel htmlFor='for'>Subir Foto</FormLabel>
              <Formfile id="fileinput"  type='file' name="foto"/>
              <FormLabel htmlFor='for'>Historia de la mascota</FormLabel>
              <Formtextarea
                type="text"
                name='descripcion'
                placeholder="Historia de Pelusa"
                onChange={handleChange}
                required/>
                <FormLabel
                  htmlFor='for'>
                    Raza
                </FormLabel>
                <Select>
                  <option name="id_raza" value="" hidden>
                    Opcion
                  </option>
                  <option value="1">Mixta</option>
                  <option value="2">Dalmata</option>
                  <option value="3">Salchicha</option>
                  <option value="4">Labrador</option>
                </Select>
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
