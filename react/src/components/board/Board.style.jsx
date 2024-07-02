import styled from "styled-components";


export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
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
    background: #fff;
    border: 1px solid #999;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
