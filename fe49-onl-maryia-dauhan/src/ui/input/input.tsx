import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
  disabled?: boolean;
};

export const Input: React.FC<Props> = ({
  labelText,
  disabled,
  error,
  ...restProps
}) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper
        type='text'
        name='name'
        disabled={disabled}
        placeholder='Placeholder'
        maxLength={100}
        $borderColor={error ? 'red' : undefined}
        {...restProps}
      />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: 40%;
`;

const LabelText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  box-sizing: border-box;
  border: 3px solid ${({ $borderColor }) => $borderColor || 'transparent'};
  background-color: white;
  line-height: 30px;
  width: 100%;
  padding: 10px;

  &:focus-visible {
    border: 3px solid ${({ $borderColor }) => $borderColor || 'gray'};
  }

  &:active {
    border: 3px solid ${({ $borderColor }) => $borderColor || 'gray'};
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    background: silver;
    color: gray;
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
  line-height: 30px;
`;
