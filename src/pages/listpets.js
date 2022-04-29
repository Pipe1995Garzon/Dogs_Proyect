import React,{useState,useEffect} from 'react';
import ListDog from '../components/List_Dogs';

const ListPetsPage = () => {
  const [pets,setPets] = useState([]);
  useEffect(()=>{
    const getPets = () =>{
      fetch('http://localhost:3500/gestion_mascotas/listapublicamascotas').then(res=>res.json()).then(res=>setPets(res));
    }
    getPets();
  },[])
  console.log(pets)
  return(
    <>
      <ListDog pets={pets}/>
    </>
  )
};

export default ListPetsPage;
