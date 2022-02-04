import styled from "@emotion/styled";
import { useState } from "react";

import { IconButtonTypes } from "../../../assets/constants/CommonTypes";

import IconButton from "../../atoms/button/IconButton";
import { TextBox } from "../../atoms/inputField/TextBox";

const RlocWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const RLOCInput = () => {
  const [state, setState] = useState("");

  return (
    <RlocWrapper>
      <TextBox
        size={12}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <IconButton
        type={IconButtonTypes.history}
        isFullSize={true}
        width={"1.5rem"}
        height={"1.5rem"}
      />
      <IconButton
        width={"1.5rem"}
        height={"1.5rem"}
        type={IconButtonTypes.cacao}
        isFullSize={true}
      />
    </RlocWrapper>
  );
};
