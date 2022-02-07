import styled from '@emotion/styled';
import HeadingBar from 'components/presentational/atoms/ListItemHeadingMeal/HeadingBar';
import ListItem from 'components/presentational/atoms/ListItemMeal/ListItem';
import { FC } from 'react';


const ScrollingArea = styled.div`
  height: 6rem;
  overflow-y: scroll;
  scrollbar-width: thin;
  border: 1px solid green;
`;
const Items = styled.div`
  padding: 6px 0;
  margin-left: 3rem;
  margin-right: 2rem;
  display: flex;
  font-size: 0.9rem;
`;
const MealsWrapper = styled.div`
  max-width: 30vw;
`;

type MealComponentProps = {
  MealIconSrc: JSX.Element;
  onClick: (value: string) => void;
  Heading: string;
  LinkList: {
    key: number;
    link: string;
    href: string;
  }[];
};

const MealComponent: FC<MealComponentProps> = ({
  MealIconSrc,
  onClick,
  Heading,
  LinkList,
}) => (
  <MealsWrapper>
    <HeadingBar icon={MealIconSrc} label={Heading} />
    <ScrollingArea>
      {LinkList.map((e) => 
        (
          <Items>
            <ListItem link={e.link} href={e.href} onClick={onClick} />
          </Items>
        )
      )}
    </ScrollingArea>
  </MealsWrapper>
);

export default MealComponent;
