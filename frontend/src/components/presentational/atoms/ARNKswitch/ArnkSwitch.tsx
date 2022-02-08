import styled from '@emotion/styled';
import SvgActiveCarPlane from 'assets/svgr-components/ActiveCarPlane';
import SvgActivePlainCar02 from 'assets/svgr-components/ActivePlainCar02';
import { useEffect, useState } from 'react';


type ARNKSwitchProps = {
  onClick: (stateVar: boolean) => void;
  isARNK?: boolean
};

const Button = styled.button`
  width: 3.5rem;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
`;

export const ARNKSwitch: React.FC<ARNKSwitchProps> = ({
  onClick,
  isARNK = false
}) => {
  const [state, setState] = useState(false);

  const changeOption = (stateVar:boolean) => {
    if (stateVar === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(()=>{
    setState(isARNK);
  },[isARNK])
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



