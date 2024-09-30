import styled, { keyframes, css } from "styled-components";
const fadeInUp = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrap = styled.div`
  padding: 72px 0px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 9px;
  margin: 0 32px;
  background-image: url("assets/background.avif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;
  opacity: ${(isloaded) => (isloaded ? 1 : 0)};
  ${(isloaded) =>
    isloaded &&
    css`
      animation: ${fadeInUp} 1s ease-out forwards;
    `}

  @media (max-width: 600px) {
    margin: 0;
  }
`;
export const Heading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 87px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: unset;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(163, 163, 163, 0.3);
  border-radius: 30px;
  padding: 8px;
  border: 1px solid rgba(189, 189, 189, 0.4);
  backdrop-filter: blur(10px);
`;

export const Tabs = styled(BoxContainer)`
  margin: 16px;
  @media (max-width: 425px) {
    margin: 16px 0px;
  }
`;
export const Match = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #ffffff;
  p {
    margin: 0;
  }
`;
export const PopoverTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;

export const Tab = styled.div`
  padding: 16px 32px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ tabs, active }) => (active || tabs ? "#000" : "#fff")};
  border-radius: 30px;
  text-wrap: nowrap;
  transition: background 0.3s ease;
  box-shadow: ${({ active }) =>
    active ? "0 0 4px 0 rgba(0, 0, 0, 0.15);" : ""};
`;

export const SeasonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

export const Season = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: ${({ active }) => (active ? "grayscale(0%)" : "grayscale(100%)")};
`;

export const SeasonIcon = styled.div`
  background: ${({ color }) => color};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const PoperContainer = styled.div`
  padding: 25px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #ffffff;
  border-radius: 15px;
  @media (max-width: 425px) {
    padding: 25px 10px;
  }
  @media (max-width: 375px) {
    padding: 25px 5px;
  }
`;
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

export const TabWarpper = styled.div`
  display: flex;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 9px;
`;
