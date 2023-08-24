import styled from 'styled-components'; 

type Props = { 
  children: string;   
};

export const Header: React.FC<Props> = ({ children }) => {
  return (    
  <HeaderStyle>
    {children}
  </HeaderStyle>
  )
};

const HeaderStyle = styled.span`
  background-color: rgb(31, 31, 136);
  min-height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
