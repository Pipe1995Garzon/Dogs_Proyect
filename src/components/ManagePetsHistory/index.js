import React,{useState} from 'react';
import {Container,Wrapper,Icon,
        Card,ListIcon,P,H22,
        FormButtonVerMascota,FormButtonEditarHistoria,
        Form, FormButtonEliminarHistoria,FormInput,Select,
       Formtextarea} from './ManagePetsHistoryElements';
import Icon1 from '../../images/foundation.svg';

const ManagePetsHistory= ({history,setUpdated,historia,setHistoria,breed}) => {
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
  //actualizo a estado historia los valores que se van a enviar
  const handleChange = ({target: {name,value}})=>
    setHistoria({...historia, [name]:value})

//eliminar historia
const handleDelete = id =>{
  //consulta
  const requestInit ={
     method:'DELETE',
   }
   fetch('http://localhost:3500/gestion_mascotas/eliminar_historia/'+id,requestInit)
   .then(res=> res.json())
   .then(res=> console.log(res))

    setUpdated(true)
}
let {nombre,descripcion,id_raza,usuario} = historia;
//editar consulta
const handleUpdate = id =>{
  if(nombre === '' || descripcion==='' || id_raza<=0){
    alert('digite los datos correctamente');
    return
  }
  //consulta
  const requestInit ={
     method:'PUT',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(historia)
   }
   fetch('http://localhost:3500/gestion_mascotas/modificar_historia/'+id,requestInit)
   .then(res=> res.json())
   .then(res=> console.log(res))

    setUpdated(true)
}

  return(
      <>
        <Container>
        <Icon to="/administradorDogs">Dogs</Icon>
        <H22>GESTIONAR HISTORIAS DE MASCOTAS</H22>
          <Wrapper>
            {history.map((mascota)=>{
              return(
                <Card key={mascota.id_historia}>
                  <ListIcon src={Icon1}/>
                  <P>Nombre</P>
                  <FormInput
                    onChange={handleChange}
                    type="text"
                    name="nombre"
                    placeholder={mascota.nombre}
                    required/>
                  <P>Descripcion</P>
                  <Formtextarea
                    type="text"
                    name='descripcion'
                    placeholder={mascota.descripcion}
                    onChange={handleChange}
                    required/>
                    <P>raza</P>
                    <Select name="id_raza" onChange={handleChange}>
                      <option hidden>
                        Click
                      </option>
                      {breed.map(raza=>(
                        <option key={raza.id_raza} value={raza.id_raza}>{raza.raza}</option>
                      ))}
                    </Select>
                <P>usuario: {mascota.usuario}</P>
                <FormButtonEditarHistoria
                   onClick={()=> handleUpdate(mascota.id_historia)}
                   onMouseEnter={onHover}  onMouseLeave={onHover}
                   primary='true' dark='true' smooth={true}
                   duration={500} spy={true}  exact={true}
                   offset={-80} activeClass='active'>
                   Editar historia
                </FormButtonEditarHistoria>
                <FormButtonVerMascota
                  onMouseEnter={onHover}  onMouseLeave={onHover}
                  primary='true' dark='true' smooth={true}
                  duration={500} spy={true}  exact={true}
                  offset={-80} activeClass='active'>
                  Ver historia
               </FormButtonVerMascota>
               <FormButtonEliminarHistoria
                    onClick={()=> handleDelete(mascota.id_historia)}
                    onMouseEnter={onHover}  onMouseLeave={onHover}
                    primary='true' dark='true' smooth={true}
                    duration={500} spy={true}  exact={true}
                    offset={-80} activeClass='active' >
                    Eliminar....
                </FormButtonEliminarHistoria>

                </Card>
              )
            })}
          </Wrapper>
        </Container>
      </>
  )
}

export default ManagePetsHistory;
