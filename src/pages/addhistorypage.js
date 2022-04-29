import React,{useState,useEffect} from 'react';
import AddHistoryPets from '../components/AddPetsHistory';

const AddPetsHistoryPage = () => {
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
      <AddHistoryPets breed={breed} />
    </>
  )
};

export default AddPetsHistoryPage;
