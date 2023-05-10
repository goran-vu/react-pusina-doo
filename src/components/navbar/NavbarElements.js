import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

import Logo from '../../images/pusina_logo1.png'

export const Nav=styled.nav`
    background: #888484;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    font-weight: bold;
    position:sticky;
    top:0%;
    z-index:10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
    `;
export const NavbarContainer=styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width:1100px;
`;
export const NavLogo=styled.div`
    background-image: url(${Logo});
    justify-self:flex-start;
    cursor:pointer;
    display:flex;
    height: 70%;
    width: 100px;
    margin-top: 20px;
    margin-left:24px;
    background-size:contain;
    background-repeat: no-repeat;
    
`;
export const MobileIcon=styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:20%;
        right:3%;
        transfomrt:translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:white;
    }
`;
export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-42px;
    
    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavItem =styled.li`
    height:80px;
    
`;

export const NavLinks=styled(LinkS)`
    font-family: 'Encode Sans Expanded';
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        box-sizing: 3px solid #01bf71;
    }

`

export const NavBtn =styled.nav`
    display:flex;
    align-items: center;
    @media screen and (max-width:768px){
        display:none;
    }

`
export const NavBtnLink=styled(LinkR)`
    background:url('/images/facebook1.png');
    background-size:contain;
    background-repeat:no-repeat;
	height: 60%;
    padding-right: 45px;
    outline: none;
    border:none;
    cursor: pointer;
    
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:url('/images/facebook2.png');
        height: 60%;
        background-size: contain;
        background-repeat: no-repeat;
    }
`