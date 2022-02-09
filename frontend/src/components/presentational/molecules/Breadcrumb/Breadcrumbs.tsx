import { FC } from 'react';
import styled from '@emotion/styled';
import { ArrowRight } from '../../atoms/ArrowRight/ArrowRight';
import { BreadcrumbBox } from '../../atoms/Breadcrumbs/BreadcrumbBox';
import constants from '../../../../constants/styleConstants.module.scss';

type BreadcrumbsProps = {
  pages: {
    pageName: string;
    isActive: boolean;
  }[];
};

const Breadcrumb = styled.div`
  position: relative;
  top: 20px;
  display: flex;
`;
const BreadcrumbMain = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ pages }) => (
  <>
    <Breadcrumb>
      {pages.map((page, index) => (
        <BreadcrumbMain
          key={`breadcrumbs-${page.pageName}-${pages.length + 1}`}
        >
          <BreadcrumbBox name={page.pageName} isActive={page.isActive} />
          {index !== pages.length - 1 ? (
            <ArrowRight color={constants.basicColor} />
          ) : null}
        </BreadcrumbMain>
      ))}
    </Breadcrumb>
  </>
);
