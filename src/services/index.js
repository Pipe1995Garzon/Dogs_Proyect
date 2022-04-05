import React from 'react';
import axios from 'axios';

const base_Url_Pets=process.env.REACT_APP_BASE_URL

export async function getpets(){
  try{
    const response = await axios({
      url:`${base_Url_Pets}/lista_mascotas`,
      method:'GET'
    });
    return response;
  }catch(e){
    console.log(e);
  }
}
