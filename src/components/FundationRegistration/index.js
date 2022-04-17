import React,{useState} from 'react';
import {Container, FormWrap, Icon, FormContent,Form,
        FormH1, FormLabel, FormInput,FormButton,Text} from './FundationRegistrationElements';
import {useAuth} from '../../context/authContext';
import {useNavigate} from 'react-router-dom';

const RegisFundation = () =>{

  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const {signup} = useAuth();
  const navigate = useNavigate();
  const[error, setError]=useState()
  const handleChange = ({target: {name,value}}) =>
    setUser({...user, [name]:value})


  const handleSubmit = async e =>{
    e.preventDefault()
    //set error aqui para no mantenet el mensaje de error despues de un intento fallido de registro
    setError('')
    try{
      await signup(user.email, user.password)
      navigate('/')
    }catch(error){
      //if(error.code==="auth/internal-error"){
        //setError("correo invalido")
      //}
      console.log(error.message);
      setError(error.message)
      //al finalizar todo pendiente seguir personaizando los codigos
    }
  }

  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Formulario de registro</FormH1>
              <FormLabel
                htmlFor='email'>
                  Usuario
              </FormLabel>
              <FormInput
                type='email'
                name='email'
                placeholder="correo electronico"
                onChange={handleChange}
              required/>
              <FormLabel
                htmlFor='for'>
                  Clave
              </FormLabel>
              <FormInput
                type='password'
                name='password'
                placeholder="**********"
                onChange={handleChange}
              required/>
              <FormButton onMouseEnter={onHover}  onMouseLeave={onHover}
              primary='true' dark='true' smooth={true}
               duration={500} spy={true}  exact={true} offset={-80} activeClass='active' >Registrar</FormButton>
              <Text>Muchas gracias por unirte al proyecto DOGS!</Text>
              {error && <p>{error}</p>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default RegisFundation;
