import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,
        LinkLabel,Formfile,
        Formtextarea,Select,ColumnCard} from './AddDogsElements';

const  AddDogs = () =>{
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
            <FormH1>Registrame aqui!!!</FormH1>
            <ColumnCard>
              <FormLabel htmlFor='for'>Nombre de la mascota</FormLabel>
              <FormInput
                type='text'
                name='nombre'
                placeholder="Pelusa"
                onChange={handleChange}
                required/>
              <FormLabel htmlFor='for'>Subir Foto</FormLabel>
              <Formfile id="fileinput"  type='file' name="fotomascota"/>
              <FormLabel htmlFor='for'>edad mascota</FormLabel>
              <FormInput
                type="number"
                name="edad"
                placeholder="Digitar edad de la mascota"
                onChange={handleChange}
                required
              />
            </ColumnCard>
              <FormLabel htmlFor='for'>Algo sobre mí</FormLabel>
              <Formtextarea
                type="text"
                name='descripcion'
                placeholder="habla sobre mi!!!!"
                onChange={handleChange}
                required/>
            <ColumnCard>
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
              <FormLabel
                htmlFor='for'>
                Vacuna
              </FormLabel>
              <Select>
                <option name="id_vacuna" value="" hidden>
                  Opcion
                </option>
                <option value="1">Si</option>
                <option value="2">No</option>
              </Select>
              <FormLabel
                htmlFor='for'>
                Estado
              </FormLabel>
              <Select>
                <option name="id_estado" value="" hidden>
                  Opcion
                </option>
                <option value="1">En busca de un hogar!!!!</option>
                <option value="2">Ya tengo un hogar !!!!!</option>
              </Select>
            </ColumnCard>
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
               Gracias!!!
              </FormButton>
              <LinkLabel href="/administradorDogs">Volver</LinkLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
export default AddDogs;
