import React,{useState,useEffect} from 'react';
import ListDogAdmin from '../components/ListDogs_Admin';
import {useAuth} from '../context/authContext';

const ListPetsAdminPage = () => {
  const {user} = useAuth();

  const [pets,setPets] = useState([]);

  //estado que va a gestionar los datos que se van a registrar
  const [mascota,setMascota] = useState({
    nombre:"",
//    foto:"",
    edad:"",
    descripcion:"",
    id_raza:0,
    id_vacuna:0,
    id_estado:0,
    usuario:`${user.displayName || user.email}`,
    numero_contacto:""
  })

  //listar razo de gestion_mascotas
  const [breed, setbreed] = useState([]);
  //listar estado de la vacuna desde la db
  const [vaccine,setvaccine] = useState([]);
  //listar estado del canino
  const [dogstate, setdogstate] = useState([]);
  //gestiona los datos que se actualizan
  const [petsUpdated, setpetsUpdated]=useState(false)

  //usuario clave para listar historias individueles
  const[usuario, setUsuario] = useState(`${user.displayName || user.email}`)

  useEffect(()=>{
    const getPets = () =>{
      fetch(`http://localhost:3500/gestion_mascotas/mascotasindividuales/${usuario}`)
      .then(res=>res.json())
      .then(res=>setPets(res));
    }

    const getBreed = () =>{
      fetch('http://localhost:3500/gestion_mascotas/listarrazamascotas').then(res=>res.json()).then(res=>setbreed(res));
    }

    const getVaccineState = () => {
      fetch('http://localhost:3500/gestion_mascotas/estadovacuna').then(res=>res.json()).then(res=>setvaccine(res));
    }

    const getDogsState = () =>{
      fetch('http://localhost:3500/gestion_mascotas/estadomascotas').then(res=>res.json()).then(res=>setdogstate(res));
    }


    getPets();
    getBreed();
    getVaccineState();
    getDogsState();
    setpetsUpdated(false)
  },[petsUpdated])
  console.log(pets)
  return(
    <>
      <ListDogAdmin
        pets={pets}
        setpetsUpdated={setpetsUpdated}
        mascota={mascota}
        setMascota={setMascota}
        breed={breed}
        vaccine={vaccine}
        dogstate={dogstate}
      />
    </>
  )
};

export default ListPetsAdminPage;
