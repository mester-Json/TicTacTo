import styled, { keyframes } from 'styled-components';

const borderColorChange = keyframes`
  0% {
    border-color: red;
  }
  33% {
    border-color: green;
  }
  66% {
    border-color: blue;
  }
  100% {
    border-color: red;
  }
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    padding:50px;
`;

export const Status = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
`;

export const BoardRow = styled.div`
    display: flex;
`;


export const SquareButton = styled.button`
    width: 60px;
    height: 60px;
    background: white;
    border: 1px solid red;
    font-size: 24px;
    font-weight: bold;
    cursor: crosshair;
    animation: ${borderColorChange} 6s infinite;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #90BE6D;
    }
`;
