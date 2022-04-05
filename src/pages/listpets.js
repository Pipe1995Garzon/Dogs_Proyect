import React from 'react';
import ListPets from '../components/ListPets';
import ScrollToTop from '../components/ScrolltoTop';


const ListPetsPage = () => {
  return(
    <>
      <ScrollToTop/>
      <ListPets/>
    </>
  )
};

export default ListPetsPage;
