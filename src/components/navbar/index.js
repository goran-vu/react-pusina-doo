import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'></NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars /> 
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' >O nama</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>Reference</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>Galerija</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>Mehanizacija</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>Kontakt</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin"></NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </>
  );
}

export default Navbar
