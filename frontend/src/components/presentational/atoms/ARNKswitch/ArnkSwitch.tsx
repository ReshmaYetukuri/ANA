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

export const ARNKSwitch: React.FC<ARNKSwitchProps> = ({
  onClick,
  
}) => {
  const [state, setState] = useState(true);

  const changeOption = (state: boolean) => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  const iconName = state ? <SvgActiveCarPlane /> : <SvgActivePlainCar02 />;

  return (
    <Button
      onClick={() => {
        onClick(state);
        changeOption(state);
      }}
    >
      {iconName}
    </Button>
  );
};



