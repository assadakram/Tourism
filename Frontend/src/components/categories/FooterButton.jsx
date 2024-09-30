import React from "react";
import { FooterButtonWrapper } from "./styles";
import { ArrowUpRightIcon } from "../icons";

const FooterButton = ({ children }) => {
  return (
    <FooterButtonWrapper>
      {children} <ArrowUpRightIcon />
    </FooterButtonWrapper>
  );
};

export default FooterButton;
