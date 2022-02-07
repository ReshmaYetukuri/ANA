import { FC } from 'react';
import { ArrowRight } from '../../atoms/ArrowRight/ArrowRight';
import { BreadcrumbBox } from '../../atoms/Breadcrumbs/BreadcrumbBox';

type BreadcrumbsProps = {
  pages: {
    pageName: string;
    isActive: boolean;
  }[];
};

const click = () => console.log('onclick enabled');

export const Breadcrumbs : FC<BreadcrumbsProps> =({ pages }) => (
  <>
    <div className="search breadCrumbDivFlex">
      {pages.map((page, index) => (
        <div
          className="breadCrumbDivMain"
          key={`breadcrumbs-${page.pageName}-${pages.length + 1}`}
        >
          <BreadcrumbBox
            name={page.pageName}
            isActive={page.isActive}
            onClick={click}
          />
          {index !== pages.length - 1 ? (
            <ArrowRight color="rgb(16,113,112)" />
          ) : null}
        </div>
      ))}
    </div>
  </>
);
