import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,
        LinkLabel,Formfile,
        Formtextarea,Select,ColumnCard} from './AddDogsElements';
import {useAuth} from '../../context/authContext';


const  AddDogs = ({breed,vaccine,dogstate}) =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

//me traigo el usuario que va a realizar la publicacion
const{user} = useAuth();

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
          <Icon to="/administradorDogs">Dogs</Icon>
          <FormContent>
            <Form>
            <FormH1>Registrame aqui!!! 🐾</FormH1>
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
              <FormLabel htmlFor='for'>edad mascota</FormLabel>
              <FormInput
                type="number"
                name="edad"
                pattern="^[0-9]"
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
                  Click
                </option>
                {breed.map(raza=>(
                  <option key={raza.id_raza} value={raza.id_raza} name="id_raza">{raza.raza}</option>
                ))}
              </Select>
              <FormLabel
                htmlFor='for'>
                Vacuna
              </FormLabel>
              <Select>
                <option name="id_vacuna" value="" hidden>
                  Click
                </option>
                {vaccine.map(vacuna=>(
                  <option key={vacuna.id_vacuna} value={vacuna.id_vacuna} name="id_vacuna">{vacuna.vacuna}</option>
                ))}
              </Select>
              <FormLabel
                htmlFor='for'>
                Estado
              </FormLabel>
              <Select>
                <option name="id_estado" value="" hidden>
                  Click
                </option>
                {dogstate.map(estado=>(
                  <option key={estado.id_estado}  value={estado.id_estado} name="id_estado">{estado.estado}</option>
                ))}
              </Select>
            </ColumnCard>
            <FormLabel htmlFor='for'>usuario</FormLabel>
            <FormInput
              type='text'
              name='usuario'
              value={user.displayName || user.email}
              onChange={handleChange}
              readonly/>
            <FormLabel htmlFor='for'>numero de contacto</FormLabel>
            <FormInput
              type="number"
              name="numero_contacto"
              placeholder="312***** necsario"
              onChange={handleChange}
              required
            />
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
              <LinkLabel href="/administradorDogs">Volver 🐾</LinkLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
export default AddDogs;
