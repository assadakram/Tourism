import React from "react";
import { Label, Checkbox, CustomCheckbox } from "./styles";
import { CheckIcon, MinusIcon } from "../icons";

const CheckboxLabel = (props) => (
  <Label isTitle={props.isTitle}>
    <Checkbox type="checkbox" {...props} readOnly />
    <CustomCheckbox checked={props.checked}>
      {props.isTitle ? (
        <MinusIcon fill="#ffffff" />
      ) : (
        props.checked && <CheckIcon fill="#ffffff" />
      )}
    </CustomCheckbox>
    <span>{props.label}</span>
  </Label>
);

export default CheckboxLabel;
