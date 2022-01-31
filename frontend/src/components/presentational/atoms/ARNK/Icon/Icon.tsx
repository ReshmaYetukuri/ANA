import styled from '@emotion/styled';

interface IconProps {
  width: number | string;
  height: number | string;
  src: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconWrap = styled.img<IconProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Icon = ({ width, height, src, handleClick }: IconProps) => (
  <IconWrap width={width} height={height} src={src} handleClick={handleClick} />
);
Icon.defaultProps = {
  handleClick: false,
};
export default Icon;
