import styled from '@emotion/styled';
import SvgActiveCarPlane from 'assets/svgr-components/ActiveCarPlane';
import SvgActivePlainCar02 from 'assets/svgr-components/ActivePlainCar02';
import { useState } from 'react';

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
  let iconName = state ? <SvgActiveCarPlane /> : <SvgActivePlainCar02 />;

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
