import styled from 'styled-components';

type Props = { 
  children: string;   
};

export const Title: React.FC<Props> = ({ children }) => {
  return (
    <TitleWrap>
      <h1>{children}</h1>
    </TitleWrap>
  );
};
  
const TitleWrap = styled.span`
  color: black;
  font-weight: 500;
  font-size: 32px;
  background: lightgray;
  padding: 10px;
`;