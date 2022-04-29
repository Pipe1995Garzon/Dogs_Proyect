import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo,CellLogo,NavMenu,
        NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () =>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

useEffect(()=>{
      window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () =>{
      scroll.scrollToTop();
    }

  return (
    <>
     <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo  to='/' onClick={toggleHome}>
            Dogs 🐾
          </NavLogo>
          <CellLogo onClick={toggle}>
            <FaBars />
          </CellLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
               to="about" smooth={true}
                duration={500} spy={true}
                exact={true} offset={-80} activeClass='active'>Historias</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true}
               duration={500} spy={true}
               exact={true} offset={-80} activeClass='active'>Adopta</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true}
               duration={500} spy={true}
               exact={true} offset={-80} activeClass='active'>Objetivos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="register"  smooth={true}
               duration={500} spy={true}
               exact={true} offset={-80} activeClass='active'>App</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="signin">Ingresar</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
     </IconContext.Provider>
    </>
  );
}

export default Navbar;
