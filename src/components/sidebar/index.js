import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRouter
} from './SidebarElements';


const Sidebar= ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                O nama
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
                Galerija
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle} >
                Reference
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle} >
                Mehanizacija
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle} >
                Kontakt
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRouter >
                Sign in
            </SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
