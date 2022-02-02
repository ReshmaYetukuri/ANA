import { FC } from 'react';
import styled from "@emotion/styled";

const LinkLabelStyle = styled.label({
  fontFamily: "Noto Sans-Light",
});

export interface LinkelementProps {
    name: string;
}
const LinkLabel:FC<LinkelementProps> = ({name}) => <LinkLabelStyle>{name}</LinkLabelStyle>
export default LinkLabel
