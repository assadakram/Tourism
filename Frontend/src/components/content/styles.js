import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: 0 32px;
  position: relative;
  z-index: 1;
  @media (max-width: 760px) {
    margin: 0 16px;
  }
`;

export const PaginationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 2;
  @media (max-width: 1024px) {
    /* Tablet: 3 rows, 2 columns */
    grid-template-columns: repeat(2, 1fr);
    flex: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 760px) {
    flex: 2;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
  flex: 1;
`;

export const PageNumber = styled.div`
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#079EA5" : "")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: ${(props) => !props.active && "1px solid #E0E0E1"};
  border-radius: 8px;
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    color: #aaa;
  `}
`;

export const Arrow = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

export const MapContainer = styled.div`
  flex: 1;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  margin: 32px 0;
`;

export const ResultTitle = styled.div`
  margin: 0 32px 16px 32px;
  font-size: 14px;
  font-weight: 500;
  color: #77787c;
  @media (max-width: 760px) {
    margin: 0 16px 16px 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 24px;
`;

export const ButtonContianer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  gap: 0.5rem;

  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: black;
      color: white;
      &:hover {
        background-color: #333;
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: #f5f5f5;
      }
    `}
`;
