import styled from "styled-components";


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
    border: 1px solid #999;
    font-size: 24px;
    font-weight: bold;
    cursor: crosshair;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color:#90BE6D;
    }
`;
