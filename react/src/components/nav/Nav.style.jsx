import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% { border-bottom-color: red; }
  33% { border-bottom-color: green; }
  66% { border-bottom-color: blue; }
  100% { border-bottom-color: red; }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-bottom: 7px solid red; 
    animation: ${changeColor} 6s infinite;
`;

export const H1 = styled.h1`
    font-size: 25px;
    color: white;
`;
