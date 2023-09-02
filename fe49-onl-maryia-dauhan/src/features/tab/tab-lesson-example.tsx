import styled from 'styled-components';

type Item = {
  id: string;
  title: string;
};

type Props = {
  items: Item[];
  activeId: string;
  onTabClick: (id: string) => void;
};

export const TabPanel: React.FC<Props> = ({ items, activeId, onTabClick }) => {
  return (
    <TabPanelWrapper>
      {items.map(({ id, title }) => (
        <Tab
          key={id}
          id={id}
          title={title}
          isActive={id === activeId}
          onClick={onTabClick}
        />
      ))}
    </TabPanelWrapper>
  );
};

const TabPanelWrapper = styled.ul`
  all: unset;
  display: flex;
  justify-content: space-around;
  border: 1px solid dimgray;

  & > * + * {
    margin-inline-start: 15px;
  }
`;

type TabProps = Item & {
  isActive: boolean;
  onClick: (id: string) => void;
};

const Tab: React.FC<TabProps> = ({ id, title, isActive, onClick }) => {
  return (
    <TabWrapper $isActive={isActive}>
      <TabButton type="button" onClick={() => onClick(id)}>
        {title}
      </TabButton>
    </TabWrapper>
  );
};

const TabWrapper = styled.li<{ $isActive: boolean }>`
  display: block;
  box-sizing: border-box;
  border-bottom: ${({ $isActive }) => {
    return $isActive && '5px solid green';
  }};
`;

const TabButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: red;
  }
`;
