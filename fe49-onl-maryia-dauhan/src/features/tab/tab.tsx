import { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  title: string
}

export const Tab: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <TabWrapper>{children}</TabWrapper>
}

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-weight: 700;
  font-size: 18px;
`;
