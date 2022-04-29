import React,{useState,useEffect} from 'react';
import ManagePetsHistory from '../components/ManagePetsHistory';
import ScrollToTop from '../components/ScrolltoTop';

const ManageAllPetsHistory = () =>{
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
      <ManagePetsHistory history={history}/>
    </>
  )
};

export default ManageAllPetsHistory;
