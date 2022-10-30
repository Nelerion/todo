import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 800px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
`;
export const MakeTodo = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 28px;
  ::placeholder {
    color: #c8cec8;
    font-style: italic;
  }
  color: #706170;
  box-sizing: border-box;
  background-color: #fcfcfc;
  padding: 20px;
`;
export const Item = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 24px;
  border-bottom: 1px solid #d2d1d3;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  &:hover{
    background-color:#efffd6;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #969b96;
  padding: 0 15px;
  box-sizing: border-box;
`;
export const ButtonPageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ButtonPage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
`;
export const TopBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d2d1d3;
`;
export const CheckFinish = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid black;
`;
export const StatusTodoText = styled.span`
  width: 80px;
`

