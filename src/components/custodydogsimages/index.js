import React,{useState} from 'react';
import Icon1 from '../../images/foundation.svg';
import {Container,Wrapper,Icon,Card,ListIcon,H2,P,H22,Formfile,FormButton} from './CustodyDogsimagesElements';

const DogImageCustody = ({ pets }) =>{

  const [file, setFile] = useState(null);

  const uploadImage = e =>{
    setFile(e.target.files[0]);
  }

  const sendImage = () =>{
    //validacion que exista un archivo en upload
    if(!file){
      alert('carga la imagen primero')
      return
    }
    //usar constructor form data para formatear el archivo
    const formdata = new FormData();
    formdata.append('image',file);
    //esta ruta debe ser tipo post
    fetch('http://localhost:3500/gestion_mascotas/subirimagenmascota',{
      method:'POST',
      body:formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err);
    })
    //resetear input file
    document.getElementById('fileinput').value = null;
    //regresar el estado de la imagen a null
    setFile(null);
  }

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  return(
    <>
      <Container>
      <Icon to="/administradorDogs">Dogs</Icon>
      <H22>MANEJO DE IMAGENES MASCOTAS</H22>
        <Wrapper>
        {pets.map(pet => (
            <Card key={pet.id_dog_custodia}>
              <ListIcon src={Icon1}/>
              <H2>{pet.nombre} {pet.id_dog_custodia}</H2>
              <P>{pet.historia}</P>
              <Formfile id="fileinput" onChange={uploadImage} type='file' name="foto"/>
              <FormButton onClick={sendImage} onMouseEnter={onHover}  onMouseLeave={onHover}
              primary='true' dark='true' smooth={true}
               duration={500} spy={true}  exact={true} offset={-80} activeClass='active' >Subir imagen</FormButton>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export default DogImageCustody;
