import React from "react";

type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
  return <button onClick={() => setOpen((prev) => !prev)}>Button</button>;
};

export default ToggleButton;
