import styled from '@emotion/styled';
import { ErrorComponent } from 'components/presentational/atoms/ARNK/Error/ErrorComponent';
import Icon from 'components/presentational/atoms/ARNK/Icon/Icon';

interface HeaderProps {
  headerData: {
    heading: string;
    imgWidth?: number;
    imgHeight?: number;
    imgAlt?: string;
  };
  errorData: {
    errorMsg: string;
  }[];
  src: string;
  handleInfo?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Head = styled.div`
  background-color: #00a19b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  h1 {
    color: #eeffff;
    margin: 0;
  }
`;

const Header = ({ src, headerData, errorData, handleInfo }: HeaderProps) => (
  <Head>
    <h1>{headerData.heading}</h1>
    {!!errorData[0].errorMsg && <ErrorComponent errors={errorData} />}
    <Icon
      width={headerData?.imgWidth || ''}
      height={headerData?.imgHeight || ''}
      src={src}
      handleClick={handleInfo}
    />
  </Head>
);
Header.defaultProps = {
  handleInfo: false,
};
export default Header;
