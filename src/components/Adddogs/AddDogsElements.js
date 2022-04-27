import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Dog from '../../images/Dogfour.jpg';

export const Container = styled.div`
  min-height: 692px;
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

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

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
  max-width: auto;
  height: auto;
  width: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 82px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0 , 0, 0.9);

  @media screen and (max-width: 400px){
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;

  font-size: 14px;
  color #fff;
  font-weight:600;
  text-align:center;
`;

export const FormInput  = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
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
  padding: 16px 16px;
  margin-bottom: 32px;
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


export const FormButtonGoogle = styled.button`
  background: ${({ primary }) => (primary ? '#010606' : '#01BF71')};
  padding: 14px 16px;
  border: none;
  border-radius: 32px;
  color: ${({ dark }) => (dark ? '#fff' : '#010606')};
  font-size: 20px;
  cursor: pointer;
  &:hover{
     transition: all 0.2s ease-in-out;
     background: ${({ primary }) => (primary ? '#FA5B24' : '#01BF71')};

   }
`;

export const LinkLabel = styled.a`
  margin-bottom: 8px;
  font-size: 14px;
  color #fff;
  font-weight:600;
  text-align:center;
`;

export const Formfile  = styled.input`
  padding: 16px 16px;
  margin-bottom: 16px;
  border:none;
  border-radius: 32px;
`;

export const Formtextarea = styled.textarea`
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

export const Select = styled.select`
  width:100%;
  height: 35px;
  background:white;
  color:gray;
  padding-left:5px;
  font-size:14px;
  border:none;
  margin-left:10px;
  option {
    color: black;
    background:white;
    display:flex;
    white-space: pre;
    min-height:20px;
    padding: 0px 2px 1px;

  }
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ColumnCard = styled.div`
  column-count: 3;
  height: 100px;
`;
