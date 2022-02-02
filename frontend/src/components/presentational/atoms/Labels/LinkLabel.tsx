import { FC } from 'react';
import styled from "@emotion/styled";

const LINKLABEL = styled.label({
  fontFamily: "Noto Sans-Light",
});

export interface LinkelementProps {
    name: string;
}
const LinkLabel:FC<LinkelementProps> = ({name}) => <LINKLABEL>{name}</LINKLABEL>
export default LinkLabel
