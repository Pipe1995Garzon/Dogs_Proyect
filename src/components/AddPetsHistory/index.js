import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,Select,
        LinkLabel,Formfile,Formtextarea,ColumnCard} from './AddPetsHistoryElements';
import {useAuth} from '../../context/authContext';

const  AddHistoryPets = ({breed}) =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

//me traigo el usuario que va a hacer la publicacion
const {user} = useAuth();

//guardar los valores que traen los inputs
  const [usuario, setUsuario] = useState({
    email:"",
    password:"",
  });
//trae los datos de los inputs
  const handleChange = ({target: {name,value}}) =>
    setUsuario({...usuario, [name]:value})


  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/administradorDogs">Dogs 🐾</Icon>
          <FormContent>
            <Form>
              <ColumnCard>
              <FormLabel htmlFor='for'>Nombre de la mascota</FormLabel>
              <FormInput
                type='text'
                name='nombre'
                placeholder="Pelusa"
                onChange={handleChange}
                required/>
              <FormLabel htmlFor='for'>Subir Foto</FormLabel>
              <Formfile id="fileinput"  type='file' name="foto"/>
              </ColumnCard>
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
                    Click aqui
                  </option>
                  {breed.map(raza =>(
                    <option key={raza.id_raza} value={raza.id_raza}>{raza.raza}</option>
                  ))}
                </Select>
                <FormLabel
                  htmlFor='for'>
                </FormLabel>
                <FormLabel
                  htmlFor='for'>
                </FormLabel>
                <FormLabel htmlFor='for'>usuario</FormLabel>
                <FormInput
                  type='text'
                  name='usuario'
                  value={user.displayName || user.email}
                  onChange={handleChange}
                  readonly/>
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
