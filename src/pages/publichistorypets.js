import React,{useState,useEffect} from 'react';
import PublicHistory from '../components/PublicHistoryPets';
import ScrollToTop from '../components/ScrolltoTop';

const PublicHistoryPets = () =>{
  const [history, sethistory] = useState([]);
  useEffect(()=>{
    const getHistory = () =>{
        fetch('http://localhost:3500/gestion_mascotas/historias')
        .then(res=>res.json())
        .then(res=>sethistory(res))
    }
    getHistory()
  },[])

  return(
    <>
      <ScrollToTop/>
      <PublicHistory history={history}/>
    </>
  )
};

export default PublicHistoryPets;
