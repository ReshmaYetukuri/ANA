import styled from "@emotion/styled";
import ActiveCar from "../ActiveCar";
import ActivePlane from "../ActivePlain";
import { useState } from "react";

type ARNKSwitchProps = {
  onClick: (state: boolean) => void;
};

const Button = styled.button`
  width: 4.3rem;
  height: 2rem;
  border: none;
`;

export const ARNKSwitch = (props: ARNKSwitchProps) => {
  const [state, setState] = useState(true);

  const changeOption = (state: boolean) => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  let iconName = state ? <ActivePlane /> : <ActiveCar />;

  return (
    <Button
      onClick={() => {
        props.onClick(state);
        changeOption(state);
      }}
    >
      {iconName}
    </Button>
  );
};
