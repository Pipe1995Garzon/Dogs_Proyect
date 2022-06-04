import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,
        LinkLabel,Formfile,
        Formtextarea,Select,ColumnCard} from './AddDogsElements';
import {useAuth} from '../../context/authContext';


const  AddDogs = ({breed,vaccine,dogstate,mascota,setMascota}) =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

//me traigo el usuario que va a realizar la publicacion
const{user} = useAuth();
//actualiza el estado con los valores que se van a guardar
const handleChange = ({target:{name,value}})=>
      setMascota({...mascota, [name]:value})
//nos traemos y manejamos asi los datos del formulario para una mejor gestion
let{nombre,foto,edad,descripcion,id_raza,id_vacuna,id_estado,usuario,numero_contacto} = mascota;


const handleSubmit = () =>{
    if(nombre === '' || edad<0 || numero_contacto===''){
      alert('digite los datos correctamente');
      return
    }
    const requestInit={
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(mascota)
    }
    //consulta
    fetch('http://localhost:3500/gestion_mascotas/resgitrar_mascotas',requestInit)
    .then(res=>res.json())
    .then(res=>console.log(res))

    setMascota({
      nombre:"",
      foto:"",
      edad:"",
      descripcion:"",
      id_raza:0,
      id_vacuna:0,
      id_estado:0,
      usuario:`${user.displayName || user.email}`,
      numero_contacto:""
    })
}

  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/administradorDogs">Dogs</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
            <FormH1>Registrame aqui!!! 🐾</FormH1>
            <ColumnCard>
              <FormLabel htmlFor='for'>Nombre de la mascota</FormLabel>
              <FormInput
                type='text'
                name='nombre'
                placeholder="Pelusa"
                onChange={handleChange}
                required/>
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
              <Select name="id_raza" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {breed.map(raza=>(
                  <option key={raza.id_raza} value={raza.id_raza}>{raza.raza}</option>
                ))}
              </Select>
              <FormLabel
                htmlFor='for'>
                Vacuna
              </FormLabel>
              <Select name="id_vacuna" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {vaccine.map(vacuna=>(
                  <option key={vacuna.id_vacuna} value={vacuna.id_vacuna}>{vacuna.vacuna}</option>
                ))}
              </Select>
              <FormLabel
                htmlFor='for'>
                Estado
              </FormLabel>
              <Select name="id_estado" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {dogstate.map(estado=>(
                  <option key={estado.id_estado}  value={estado.id_estado}>{estado.estado}</option>
                ))}
              </Select>
            </ColumnCard>
            <FormLabel htmlFor='for'>usuario</FormLabel>
            <FormInput
              type='text'
              name='usuario'
              value={user.displayName || user.email}
              onChange={handleChange}
              disabled/>
            <FormLabel htmlFor='for'>numero de contacto</FormLabel>
            <FormInput
              type="number"
              name="numero_contacto"
              placeholder="312***** requerido"
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
