import {createContext,useContext,useEffect,useState} from 'react';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext()

export const useAuth = () =>{
  const context =  useContext(authContext);
  if(!context) throw new Error('no existe un contexto')
  return context;
};

export default function AuthProvider({children}) {
const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true);
const signup=(email,password)=>
      createUserWithEmailAndPassword(auth,email,password);
  //console.log(email,password);
const login=(email,password)=>
      signInWithEmailAndPassword(auth,email,password);

const logout = () => signOut(auth);

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
},[])
  return (
      <authContext.Provider value={{signup,login,user,logout,loading}}>{children}</authContext.Provider>
  );

}
