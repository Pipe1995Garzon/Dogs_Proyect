import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Dog from '../../images/Dogfour.jpg';

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

export const Wrapper = styled.div`
  max-width:1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    paddding 0 20px;
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
export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ListIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align:center;
`;

export const P = styled.p`
  font-size: 1rem;
  text-align:center;
`;
