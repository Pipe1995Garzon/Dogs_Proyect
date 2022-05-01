import React,{useState,useEffect} from 'react';
import ManagePetsHistory from '../components/ManagePetsHistory';
import ScrollToTop from '../components/ScrolltoTop';
import {useAuth} from '../context/authContext';


const ManageAllPetsHistory = () =>{
  const {user} = useAuth();

  //gestiona los datos actuales para listarlos
  const [history, sethistory] = useState([]);

  //gestiona los datos que se van a editar
    const [historia, setHistoria] = useState({
      nombre:"",
    //  foto:"",
      descripcion:"",
      id_raza:0,
      usuario: `${user.displayName || user.email}`
    })

    //listar raza de mascotas desde la bd
    const [breed, setbreed] = useState([]);

    //usuario clave para listar historias individueles
  const[usuario, setUsuario] = useState(`${user.displayName || user.email}`)

  //gestiona los datos que se actualizan despues de eliminar
  const [updated, setUpdated] = useState(false);
  useEffect(()=>{
    const getHistory = () =>{
        fetch(`http://localhost:3500/gestion_mascotas/listaindividual/${usuario}`)
        .then(res=>res.json())
        .then(res=>sethistory(res))
    }
    const getBreed = () =>{
      fetch('http://localhost:3500/gestion_mascotas/listarrazamascotas').then(res=>res.json()).then(res=>setbreed(res));
    }

    getHistory()
    getBreed();
    setUpdated(false)
  },[updated])

  return(
    <>
      <ScrollToTop/>
      <ManagePetsHistory
        history={history}
        setUpdated={setUpdated}
        historia={historia}
        setHistoria={setHistoria}
        breed={breed}
        />
    </>
  )
};

export default ManageAllPetsHistory;
