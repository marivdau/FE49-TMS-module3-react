import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
  tabTitle: string;
  title: string;
  content: string;
  disabled?: boolean;
}

const tabs: Props[] = [
  {
    id: 0,
    tabTitle: 'Tab 1',
    title: 'Title 1',
    content:
      'Душа моя озарена неземной радостью, как эти чудесные весенние утра',
  },
  {
    id: 1,
    tabTitle: 'Tab 2',
    title: 'Title 2',
    content:
      'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.',
  },
  {
    id: 2,
    tabTitle: 'Tab 3',
    title: 'Title 3',
    content:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. ',
  },
  {
    id: 3,
    tabTitle: 'Tab 4',
    title: 'Title 4',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    disabled: true,
  },
];

export const TabDefault = () => {
  const [currentTab, setSurrentTab] = useState(0);

  const handleTabClick = (id: number) => {
    setSurrentTab(id);
  };

  return (
    <TabWrapper>
      <TabList>
        {tabs.map((tab, id) => (
          <TabItem key={id}>
            <TabButton
              type='button'              
              onClick={() => handleTabClick(tab.id)}
              className={currentTab === id ? 'active' : 'inactive'}
              disabled={tab.disabled}
            >
              {tab.tabTitle}
            </TabButton>
          </TabItem>
        ))}
      </TabList>
      <div>
        {tabs.map((tab, id) => (
          <Content
            key={id}
            className={currentTab === id ? 'active' : 'inactive'}
          >
            <div>
              <ContentTitle>{tab.title}</ContentTitle>
              <ContentText>{tab.content}</ContentText>
            </div>
          </Content>
        ))}
      </div>
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TabItem = styled.li`
  all: unset;
`;

const TabButton = styled.button`
  all: unset;
  cursor: pointer;
  color: dimgray;
  font-weight: 500;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 3px solid transparent;

  &:hover {
    color: blue;
    border-bottom: 3px solid dimgray;
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }

  &.active {
    border-bottom: 3px solid dimgray;
  }

  &.inactive {
    border-bottom: 3px solid transparent;
  }
`;

const Content = styled.div`
  all: unset;
  font-size: 18px;
  max-width: 600px;

  &.active {
    display: block;
  }

  &.inactive {
    display: none;
  }
`;

const ContentTitle = styled.p`
  font-style: italic;
  font-weight: 700;
  color: dimgray;
`;

const ContentText = styled.p`
  font-weight: 500;
  color: gray;
`;
