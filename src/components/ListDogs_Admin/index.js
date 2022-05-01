import React,{useState} from 'react';
import Icon1 from '../../images/foundation.svg';
import {Container,Wrapper,Icon,Card,ListIcon,
        P,ColumnCard,FormButtonVerMascota,
        FormButtonEditar,FormButtonEliminar,
        FormInput,Formtextarea,Select} from './ListDogsAdminElements';
import {useAuth} from '../../context/authContext';

const ListDogAdmin = ({breed,vaccine,dogstate,pets,setpetsUpdated,mascota,setMascota}) =>{

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  //me traigo el usuario que va a realizar la publicacion
  const{user} = useAuth();

  //actualizo a estado historia los valores que se van a enviar
  const handleChange = ({target: {name,value}})=>
    setMascota({...mascota, [name]:value})

  //eliminar mascota
  const handleDelete = id =>{

    //consulta...
    const requestInit ={
       method:'DELETE',
     }
     fetch('http://localhost:3500/gestion_mascotas/eliminar_mascotas/'+id,requestInit)
     .then(res=> res.json())
     .then(res=> console.log(res))

      setpetsUpdated(true)
  }

  let {
    nombre,edad,
    descripcion,id_estado
    ,id_raza,id_vacuna,
    usuario,numero_contacto
  }=mascota;

  //editar consulta
  const handleUpdate = id =>{
    alert('si esta llegando')
    if(nombre === '' || descripcion==='' || id_raza<=0 ||id_vacuna<=0 || id_estado<=0){
      alert('digite los datos correctamente');
      return
    }
    //consulta
    const requestInit ={
       method:'PUT',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(mascota)
     }
     fetch('http://localhost:3500/gestion_mascotas/modificar_mascotas/'+id,requestInit)
     .then(res=> res.json())
     .then(res=> console.log(res))

      setpetsUpdated(true)
  }


  return(
    <>
      <Container>
      <Icon to="/administradorDogs">Dogs</Icon>
        <Wrapper>
        {pets.map((pet) => (
            <Card key={pet.id_dog}>
              <ListIcon src={Icon1}/>
              <P>Nombre</P>
              <FormInput
                onChange={handleChange}
                type="text"
                name="nombre"
                placeholder={pet.nombre}
                required/>
              <P>Edad:</P>
              <FormInput
                type="number"
                name="edad"
                pattern="^[0-9]"
                placeholder={pet.edad}
                onChange={handleChange}
                required
              />
              <P>Raza: {pet.raza}</P>
              <Select name="id_raza" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {breed.map(raza=>(
                  <option key={raza.id_raza} value={raza.id_raza}>{raza.raza}</option>
                ))}
              </Select>
              <P>Vacuna: {pet.vacuna}</P>
              <Select name="id_vacuna" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {vaccine.map(vacuna=>(
                  <option key={vacuna.id_vacuna} value={vacuna.id_vacuna}>{vacuna.vacuna}</option>
                ))}
              </Select>
              <P>Estado:{pet.estado}</P>
              <Select name="id_estado" onChange={handleChange}>
                <option hidden>
                  Click
                </option>
                {dogstate.map(estado=>(
                  <option key={estado.id_estado}  value={estado.id_estado}>{estado.estado}</option>
                ))}
              </Select>
              <P>Descripcion:</P>
              <Formtextarea
                type="text"
                name='descripcion'
                placeholder={pet.descripcion}
                onChange={handleChange}
                required/>
              <P>Usuario</P>
              <FormInput
                type='text'
                name='usuario'
                value={user.displayName || user.email}
                onChange={handleChange}
                disabled/>
              <P>numero de contacto</P>
              <FormInput
                type="number"
                name="numero_contacto"
                placeholder={pet.numero_contacto}
                onChange={handleChange}
                required
              />
              <ColumnCard>
              <FormButtonVerMascota
                onMouseEnter={onHover}  onMouseLeave={onHover}
                primary='true' dark='true' smooth={true}
                duration={500} spy={true}  exact={true}
                offset={-80} activeClass='active'>
                Ver historia
             </FormButtonVerMascota>
             <FormButtonEditar
               onClick={()=> handleUpdate(pet.id_dog)}
               onMouseEnter={onHover}  onMouseLeave={onHover}
               primary='true' dark='true' smooth={true}
               duration={500} spy={true}  exact={true}
               offset={-80} activeClass='active'>
               Editar historia
            </FormButtonEditar>
            <FormButtonEliminar
                onClick={()=> handleDelete(pet.id_dog)}
                onMouseEnter={onHover}  onMouseLeave={onHover}
                primary='true' dark='true' smooth={true}
                duration={500} spy={true}  exact={true}
                offset={-80} activeClass='active' >
                Eliminar....
              </FormButtonEliminar>
              </ColumnCard>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export default ListDogAdmin;
