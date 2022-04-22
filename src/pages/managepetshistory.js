import React from 'react';
import ManagePetsHistory from '../components/ManagePetsHistory';
import ScrollToTop from '../components/ScrolltoTop';

const ManageAllPetsHistory = () =>{
  const datos=[
    {id:1, nombre:"Trivilin", historia:"****" },
    {id:2, nombre:"Mona", historia:"*****" },
    {id:3, nombre:"Paloma", historia:"******" }
  ]
  return(
    <>
      <ScrollToTop/>
      <ManagePetsHistory historiaMascotas={datos}/>
    </>
  )
};

export default ManageAllPetsHistory;
