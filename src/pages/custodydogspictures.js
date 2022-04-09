import React,{useState,useEffect} from  'react';
import DogImageCustody from '../components/custodydogsimages';

const DogImageCustodyPage = () => {
  const [pets,setPets] = useState([]);
  useEffect(()=>{
    const getPets = () =>{
      fetch('http://localhost:3500/gestion_mascotas/lista_mascotas').then(res=>res.json()).then(res=>setPets(res));
    }
    getPets();
  },[])
  console.log(pets);
  return(
    <>
      <DogImageCustody pets={pets}/>
    </>
  )
};

export default DogImageCustodyPage;
/*
 rutas admin:
  /admiimagesdogscustody
*/
