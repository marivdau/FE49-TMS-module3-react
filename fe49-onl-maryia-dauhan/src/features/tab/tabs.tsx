import styled from "styled-components";
import { TabTitle } from "./tab-title";
import { ReactElement, useState } from "react";

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div>
      <TabsWrapper>
        {children.map((item, index) => 
          <TabTitle 
            key={index}  
            title={item.props.title} 
            index={index} 
            setSelectedTab={setSelectedTab} 
          ></TabTitle>
        )}
      </TabsWrapper>
      {children[selectedTab]}
    </div>
  )
}

const TabsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
