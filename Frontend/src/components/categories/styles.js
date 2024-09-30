import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CategoriesWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  margin: 0 70px;
  position: relative;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 770px) {
    margin: 0 32px;
  }
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const PopoverWrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  width: 250px;
  padding: 16px;
  z-index: 999;
  border-top: 2px solid #079ea5;
  border-radius: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 0px;
  font-size: 16px;
  color: #079ea5;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: auto;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #000;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  ${({ isTitle }) => isTitle && `pointer-events: none;`}
  stroke: #f5f5f5;
  cursor: pointer;
  gap: 12px;
  padding: 12px 0px;
  &:hover {
    background: #f5f5f5;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid ${({ checked }) => (checked ? "#079EA5" : "grey")};
  background-color: ${({ checked }) => (checked ? "#079EA5" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`;

export const FooterButtonWrapper = styled.button`
  padding: 8px 20px 8px 20px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  & p {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    & span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const ListItemWrapper = styled.div`
  & > label {
    border-bottom: 1px solid #ddd;
  }
  & > label:last-child {
    border-bottom: none;
  }
`;

export const HorizontalLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: ${({ isopen, selecteditems }) =>
    !isopen && selecteditems.size !== 0
      ? "2px solid black"
      : "2px solid transparent"};
`;
