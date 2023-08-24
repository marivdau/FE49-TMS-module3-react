import styled from 'styled-components'; 

type Props = { 
  children: string;   
};

export const SpanInit: React.FC<Props> = ({ children }) => {
  return (    
  <SpanInitStyle>
    {children}
  </SpanInitStyle>
  )
};

const SpanInitStyle = styled.span`
  color: white;
  padding: 10px;
  width: 30px;
  height: 30px;
  background: #4755a2;
  margin-right: 10px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 5px  
`;
