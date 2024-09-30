import styled from "styled-components";

export const StyledPopoverWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ReferenceContainer = styled.div``;

export const PopoverContainer = styled.div`
  position: relative;
  width: ${({ width }) => width && `${width}px`};
  min-height: 231px;
  border-radius: 16px;
  gap: 16px;
  filter: drop-shadow(0px 4px 32px rgba(32, 17, 62, 0.08));
  background-size: cover;
  z-index: 10;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 16px;
  z-index: 5;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || "0px"};
  padding: ${({ padding }) => padding || "0px"};
`;

export const OutsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  zindex: 9;
`;
