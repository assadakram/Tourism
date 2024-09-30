import styled from "styled-components";

export const MonthsGrid = styled.div`
  width: 100%;
  display: grid;
  font-weight: 500;
  grid-template-columns: repeat(4, 64px);
  grid-template-rows: repeat(3, 64px);
  column-gap: 45px;
  row-gap: 8px;
  text-align: center;
  justify-content: center;
  align-content: center;

  @media (max-width: 375px) {
    column-gap: 30px;
  }
`;

export const MonthCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  background-color: ${({ isSelected }) =>
    isSelected ? "#000" : "transparent"};
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
`;
