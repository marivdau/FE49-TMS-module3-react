import styled from 'styled-components';

type Props = { 
  children: string; 
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
  <ButtonWrapper type='button' disabled={disabled} onClick={() => onClick()}>
    {children}
  </ButtonWrapper>
  )
};

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid rgba(0,0,255,1);
  border-radius: 4px;
  padding: 5px 10px;
  background: rgba(0,0,255,1);
  color: white;
  font-weight: 600;

  &:active {
    opacity: 0.33;;
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    background: silver;
    color: gray;
  }
`;

const ButtonWrapperSecondary = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px 10px;
  background: rgb(169,169,169,.8);
  color: black;
  font-weight: 600;

  &:active {
    background: rgb(169,169,169,1);
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    background: silver;
    color: gray;
  }
`;

const ButtonWrapperSecondary2 = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 10px;
  background: none;
  color: red;
  font-weight: 600;

  &:active {
    border: 1px solid rgb(169,169,169,.8);
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    border: 1px solid transparent;  
    background: none;
    color: gray;
  }
`;
