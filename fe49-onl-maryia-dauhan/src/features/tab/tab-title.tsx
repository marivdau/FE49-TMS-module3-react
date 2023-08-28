import styled from "styled-components";

type Props = {
  title: string;
  index: number;
  disabled?: boolean;
  setSelectedTab: (index: number) => void;
}

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, disabled }) => {
  return (
    <TabTitleWrapper>
      <TabTitleButton onClick={() => setSelectedTab(index)} disabled={disabled}>{title}</TabTitleButton>
    </TabTitleWrapper>
  )
}

const TabTitleWrapper = styled.li`
  all: unset;   
`;

const TabTitleButton = styled.button`
  all: unset;
  cursor: pointer;
  color: dimgray;
  font-weight: 500;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 3px solid transparent;

  &:hover {
    color: blue;
  }

  &:active {
    border-bottom: 3px solid dimgray;
  }

  &:target {
    border-bottom: 3px solid dimgray;
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: lightgray;
  }  
`;
