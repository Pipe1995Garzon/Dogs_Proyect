import React,{useState,useEffect} from 'react';
import AddHistoryPets from '../components/AddPetsHistory';
import {useAuth} from '../context/authContext';
const AddPetsHistoryPage = () => {
  const {user} = useAuth();

  const [historia, setHistoria] = useState({
    nombre:"",
    foto:"",
    descripcion:"",
    id_raza:0,
    usuario: `${user.displayName || user.email}`
  })

  //listar razas de mascotas desde la db
  const [breed, setbreed] = useState([]);
  useEffect(()=>{
    const getBreed = () =>{
      fetch('http://localhost:3500/gestion_mascotas/listarrazamascotas').then(res=>res.json()).then(res=>setbreed(res));
    }
    getBreed();
  },[])

  return(
    <>
      <AddHistoryPets breed={breed} historia={historia} setHistoria={setHistoria}/>
    </>
  )
};

export default AddPetsHistoryPage;
