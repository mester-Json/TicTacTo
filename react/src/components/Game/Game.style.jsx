import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GameBoard = styled.div`
    color:white;
`;

export const GameInfo = styled.div`
    margin-top: 5px;
    color: white;
    `;

export const MovesList = styled.ol`
    margin:0 25px 0 5px ;
`;

export const MoveButton = styled.button`
    margin-bottom: 15px;
    border-radius: 20px;
    border:1px ;
    width:150px;
    height:20px;
    font-size:15px;
    color:blue;
`;
