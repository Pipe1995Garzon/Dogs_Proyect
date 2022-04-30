import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form, FormLabel,
        FormInput,FormButton,Select,
        LinkLabel,Formfile,Formtextarea,ColumnCard} from './AddPetsHistoryElements';
import {useAuth} from '../../context/authContext';

const  AddHistoryPets = ({breed,historia,setHistoria}) =>{

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
//me traigo el usuario que va a hacer la publicacion
const {user} = useAuth();


//actualizo a estado historia los valores que se van a enviar
const handleChange = ({target: {name,value}})=>
  setHistoria({...historia, [name]:value})

//nos traemos los valores del formulario para darles un mejor majero
let {nombre,foto,descripcion,id_raza,usuario} = historia;

//cuando el cliente le da enviar al formulario
const handleSubmit = () =>{
  if(nombre === '' || descripcion==='' || id_raza<0){
    alert('digite los datos correctamente');
    return
  }

  //consulta
  const requestInit ={
     method:'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(historia)
  }
  fetch('http://localhost:3500/gestion_mascotas/resgitrar_historia',requestInit)
  .then(res=> res.json())
  .then(res=> console.log(res))
  // despues de guardar el archivo se deja el state como estaba al principio
  setHistoria({
    nombre:"",
    foto:"",
    descripcion:"",
    id_raza:0,
    usuario: `${user.displayName || user.email}`
  })
  alert('registro exitoso')
}

  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/administradorDogs">Dogs 🐾</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <ColumnCard>
              <FormLabel htmlFor='for'>Nombre de la mascota</FormLabel>
              <FormInput
                onChange={handleChange}
                type="text"
                name="nombre"
                placeholder="Pelusa"
                required/>
              <FormLabel htmlFor='for'>Subir Foto</FormLabel>
              <Formfile id="fileinput" onChange={handleChange}  type='file' name="foto"/>
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
                <Select name="id_raza" onChange={handleChange} >
                  <option hidden>
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
                  id='usuario'
                  value={user.displayName || user.email}
                  onChange={handleChange}
                  disabled/>
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
               Publicar
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
