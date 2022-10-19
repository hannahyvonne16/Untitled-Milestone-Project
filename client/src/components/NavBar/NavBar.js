import React, {useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components';

const COLORS= {
    primaryDark: '#115b4c',
    primaryLight: '#FEDF00',
};

const MenuLabel = styled.label `
background-color:${COLORS.primaryLight};
position: fixed;
top: 6rem;
right: 87rem;
border-radius: 50%;
height: 13rem;
width: 13rem;
cursor: pointer;
z-index: 1000;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 1);
text-align: center;
`;

const NavBackground = styled.div `
    position: fixed;
    top: 6.5rem;
    right: 87rem;
    background-image: radial-gradient(
        ${COLORS.primaryDark},
        ${COLORS.primaryLight}
    );
    height: 13rem;
    width: 13rem;
    border-radius 50%;

    transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
      transition: transform 1s;  
`;

const Icon = styled.span `
    position: relative;
    background-color: ${props => props.clicked ? 'transparent' : 'black'};
    width: 3rem;
    height: 2px;
    display: inline-block;
    margin-top: 3.5rem;
    transition: all 0.5s;

    &::before, 
    &::after {
        content:"";
        background-color: black;
        width: 3rem;
        height: 2px;
        display: inline-block;

        position: absolute;
        left: 0;
        transition: all 0.5s;
    }

    &::before {
        top: ${props => (props.clicked ? '0' : '-0.8rem')};
        transform: ${props => 
        props.clicked ? 'rotate(135deg)' : 'rotate(0)'}
    }

    &::after {
        top: ${props => (props.clicked ? '0' : '0.8rem')};
        transform: ${props => 
            props.clicked ? 'rotate(-135deg)' : 'rotate(0)'}
    }

    ${MenuLabel}:hover &::before {
        top: ${props => (props.clicked ? '0' : '-1.5rem')}; 
    }
    ${MenuLabel}:hover &::after {
        top: ${props => (props.clicked ? '0' : '1.5rem')}; 
    }
`; 

const Navigation = styled.nav `
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${ props => props.clicked ? '100%' : '0'};
    opacity: ${ props => props.clicked ? '1' : '0'};

    transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul `
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`;

const ItemLink = styled(NavLink) `
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: white;
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
                <Icon clicked={click}>&nbsp;</Icon>
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
                            <Link to='/project'>Project</Link>
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