import styled from 'styled-components';

type Props = { 
  children: string;   
};

export const Span: React.FC<Props> = ({ children }) => {
  return (    
  <SpanUser>
    {children}
  </SpanUser>
  )
};

const SpanUser = styled.span`
  color: white;
  font-weight: 300;
  font-size: 24px;
`;
