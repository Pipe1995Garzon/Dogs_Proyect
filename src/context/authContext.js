import {createContext,useContext} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext()

export const useAuth = () =>{
  const context =  useContext(authContext);
  return context;
};

export default function AuthProvider({children}) {

const signup=(email,password)=>
      createUserWithEmailAndPassword(auth,email,password);
  //console.log(email,password);


  return (
      <authContext.Provider value={{signup}}>{children}</authContext.Provider>
  );

}