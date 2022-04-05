import React,{useState,useEffect} from 'react';
import { getpets } from '../services';

export default function LoadPets(){
  const[pets, setPets] = useState([]);
  useEffect(()=>{
    async function loadPets(){
      const datos = await getpets();
      console.log(datos);

    }
    loadPets()
      .catch(console.error);
  },[])
}
