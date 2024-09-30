"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContainer, CloseButtonWrapper } from "./styles";

const Modal = ({ isVisible, onClose, children }) => {
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {portalTarget
        ? createPortal(
            <Overlay>
              <ModalContainer>
                <CloseButtonWrapper onClick={onClose}>
                  &times;
                </CloseButtonWrapper>
                {children}
              </ModalContainer>
            </Overlay>,
            document.body
          )
        : " "}
    </>
  );
};

export default Modal;
