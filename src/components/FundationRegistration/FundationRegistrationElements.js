import styled from 'styled-components';
import Dog from '../../images/smalldog.jpg';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Container = styled.div`
  min-height: auto;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: scroll;
  background-image: url(${Dog});
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;

  @media screen and (max-width: 400px){
    height: 80%;
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 32px;
  margin-top: 18px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 32px;
  animation-name: dogsanimation;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction:alternate;
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @keyframes dogsanimation {
    0%{color:black; left:0px; top:0px;}
    25%{color:#4f1056; left:200px; top:0px;}
    50%{color:#04284c; left:200px; top:200px;}
    75%{color:#adc51a; left:0px; top:200px;}
    100%{color:#fff; left:0px; top:0px}
  }

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #466973;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0 , 0, 0.9);

  @media screen and (max-width: 400px){
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color #fff;
  font-weight: 600;
  text-align: center;
`;

export const FormInput  = styled.input`
  padding: 16px 16px;
  margin-bottom: 16px;
  border:none;
  border-radius: 32px;
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;


export const FormButton = styled.button`
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  padding: 16px 0;
  border: none;
  border-radius: 32px;
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: 20px;
  cursor: pointer;
  &:hover{
     transition: all 0.2s ease-in-out;
     background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};

   }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
