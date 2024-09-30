"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import {
  PopoverContainer,
  ReferenceContainer,
  StyledPopoverWrapper,
  OutsideContainer,
} from "./styles";

export const Popover = ({
  isopen,
  width = 384,
  renderTargetContent,
  renderPopoverContent,
  placement = "top",
  onClose,
  offsetX = 0,
  offsetY = 9,
}) => {
  const containerRef = useRef(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [offsetX, offsetY],
        },
      },
    ],
  });

  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  return (
    <StyledPopoverWrapper
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
    >
      <ReferenceContainer
        ref={setReferenceElement}
        data-testid="popover-reference-container"
      >
        {renderTargetContent()}
      </ReferenceContainer>
      {portalTarget ?createPortal(
        <>
          {isopen && (
            <>
              <OutsideContainer onClick={onClose} />
              <PopoverContainer
                width={width}
                placement={placement}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {renderPopoverContent()}
              </PopoverContainer>
            </>
          )}
        </>,
        document.body
      ): ""}
    </StyledPopoverWrapper>
  );
};

export default Popover;
