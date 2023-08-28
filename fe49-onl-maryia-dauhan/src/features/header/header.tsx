import styled from "styled-components";

type Props = { 
  children: string;   
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  );
};
  
const HeaderWrapper = styled.div`
  color: blue;
`;
