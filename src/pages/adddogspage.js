import React,{useState,useEffect} from  'react';
import AddDogs from '../components/Adddogs';
import {useAuth} from '../context/authContext';

const AddDogsPage = () => {
  //me traigo al usuario que va a publicar
  const {user}=useAuth();
  //estado que va a gestionar los datos que se van a registrar
  const [mascota,setMascota] = useState({
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

  //listar raza de mascotas desde la bd
  const [breed, setbreed] = useState([]);
  //listar estado de vacuna desde la bd
  const [vaccine, setvaccine] = useState([]);
  //listar estado de canino
  const [dogstate, setdogstate] = useState([]);

  useEffect(()=>{
    const getBreed = () =>{
      fetch('http://localhost:3500/gestion_mascotas/listarrazamascotas').then(res=>res.json()).then(res=>setbreed(res));
    }
    const getVaccineState = () => {
      fetch('http://localhost:3500/gestion_mascotas/estadovacuna').then(res=>res.json()).then(res=>setvaccine(res));
    }
    const getDogsState = () =>{
      fetch('http://localhost:3500/gestion_mascotas/estadomascotas').then(res=>res.json()).then(res=>setdogstate(res));
    }
    getBreed();
    getVaccineState();
    getDogsState();
  },[])


  return(
    <>
      <AddDogs breed={breed} vaccine={vaccine} dogstate={dogstate} mascota={mascota} setMascota={setMascota}/>
    </>
  )
};

export default AddDogsPage;
