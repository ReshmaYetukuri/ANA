import { FC } from 'react';
import styled from "@emotion/styled";

const Icon = styled.img({
  width: "13px",
  height: "15px",
});

export interface IconProps {
  src: string;
  alt?:string
};

const LinkIcon:FC<IconProps> = ({src,alt}) => <Icon src={src} alt={alt} />

export default LinkIcon
