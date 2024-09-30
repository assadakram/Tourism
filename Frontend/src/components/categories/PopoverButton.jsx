import React from "react";
import { Button } from "./buttonStyles";

const PopoverButton = React.forwardRef((props, ref) => (
  <Button ref={ref} {...props} />
));

PopoverButton.displayName = "PopoverButton";

export default PopoverButton;
