import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  max-width: 50%;
  position: relative;
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 9999;
  background: #fff;
  opacity: 0.5;
`;
