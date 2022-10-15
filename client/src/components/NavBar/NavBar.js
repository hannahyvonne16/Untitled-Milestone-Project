import React, {useState} from 'react';
import styled from 'styled-components';

const COLORS= {
    primaryDark: '#115b4c',
    primaryLight: '#B6EDC8',
};

const MenuLabel = styled.label `
background-color:${COLORS.primaryLight};
position: fixed;
top: 6rem;
right: 6rem;
border-radius: 50%;
height: 7rem;
width: 7rem;
cursor: pointer;
z-index: 1000;
box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
text-align: center;
`;

const NavBackground = styled.div `
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
        ${COLORS.primaryDark},
        ${COLORS.primaryLight}
    );
    height: 6rem;
    width: 6rem;
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
        </>
    )
}

export default Navbar;