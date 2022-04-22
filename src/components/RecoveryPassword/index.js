import React,{useState} from 'react';
import {Container, FormWrap,
        Icon, FormContent,
        Form,FormH1, FormLabel,
        FormInput,FormButton,
        LinkLabel} from './RecoveryPasswordElements';
import {useAuth} from '../../context/authContext';
import {useNavigate} from 'react-router-dom';
import Alert from '../Alert';

const  RecoveryPassword = () =>{
  const[hover, setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const {recoveryPassword} = useAuth();
  const navigate = useNavigate();
  const[error, setError]=useState()
  const handleChange = ({target: {name,value}}) =>
    setUser({...user, [name]:value})


  const handleResetPassword = async e =>{
      if(!user.email) return setError('Debe digitar su email')
      try{
        await recoveryPassword(user.email);
        setError('Revisa tu email')
      }catch(error){
        setError(error.message)
      }
  }

  return(
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dogs</Icon>
          <FormContent>
            <Form onSubmit={handleResetPassword}>
              <FormH1>Recuperar Clave</FormH1>
              <FormLabel htmlFor='for'>Correo electronico</FormLabel>
              <FormInput
                type='email'
                name='email'
                placeholder="ejemplo@ejemplo.com"
                onChange={handleChange}
                required/>
              <FormButton onClick={handleResetPassword}
                onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'
                smooth={true} duration={500}
                spy={true} exact={true}
                offset={-80} activeClass='active'>
                Recuperar clave
              </FormButton>
               {error && <Alert message={error}/>}
              <LinkLabel href="/">Volver</LinkLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
export default RecoveryPassword;
