import React from "react";
import styled from "styled-components";

const BadgeDiv = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ backgroundcolor }) => backgroundcolor ?? transparent};
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: 5px;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Badge = ({ backgroundcolor, children }) => {
  return (
    <BadgeWrapper>
      <BadgeDiv backgroundcolor={backgroundcolor}>{children} </BadgeDiv>{" "}
    </BadgeWrapper>
  );
};

export default Badge;
