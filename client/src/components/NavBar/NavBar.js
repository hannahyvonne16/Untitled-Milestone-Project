import React, {useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '..//NavBar/logo.png';

const COLORS= {
    primaryDark: '#115b4c',
    primaryLight: '#FEDF00', //Pantone Yellow
};

const MenuLabel = styled.label `
background-color:${COLORS.primaryLight};
position: fixed;
top: 3rem;
right: 45vw;
border-radius: 50%;
height: 13rem;
width: 13rem;
cursor: pointer;
z-index: 1000;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
text-align: center;
`;

const NavBackground = styled.div `
    position: fixed;
    top: 3rem;
    right: 45vw;
    background-color: ${COLORS.primaryLight};
    height: 13rem;
    width: 13rem;
    border-radius 50%;
    z-index: 100;

    transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
      transition: transform 1s;  
`;



const Navigation = styled.nav `
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: ${ props => props.clicked ? '100%' : '0'};
    opacity: ${ props => props.clicked ? '1' : '0'};

    transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul `
    position: absolute;
    list-style: none;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`;

const ItemLink = styled(NavLink) `
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: black;
    padding: 1rem 2rem;

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;

    &:hover, 
    &:active {
        background-position: 100%;
        color: ${COLORS.primaryDark};
        transform: translateX(1rem);
    }
`;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick= () => setClick(!click);
    return (
        <>
            <MenuLabel htmlFor='navi-toggle' onClick={handleClick}>
                <img src={logo} style={{width: '120px', height:'auto'}}></img>
            </MenuLabel>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Navigation clicked={click}>
                <List>
                    <li>
                        <ItemLink onClick={handleClick}>
                            <Link to='/'>Home</Link>
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick}>
                            <Link to='/account'>Account</Link>
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick}>
                            <Link to='/team'>Team</Link>
                        </ItemLink>
                    </li>
                </List>

            </Navigation>
        </>
    )
}

export default Navbar;