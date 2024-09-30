import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Button = styled.button`
  background-color: ${({ isopen }) => (isopen ? "#079EA5" : "transparent")};
  color: ${({ isopen, selecteditems }) =>
    isopen ? "white" : selecteditems.size !== 0 ? "black" : "grey"};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  flex-direction: column;
  position: relative;
  white-space: nowrap;
  opacity: 0; /* Start as invisible */
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${({ delay }) =>
    `${delay}s` || "0s"}; /* Apply delay for stagger effect */

  & span {
    font-size: 10px;
  }
`;
