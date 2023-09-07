import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
};

export const Textarea: React.FC<Props> = ({ labelText }) => {
  return (
    <TextAreaLabel>
      <TextAreaLabelText>{labelText}</TextAreaLabelText>
      <TextAreaWrapper
        placeholder='Add your text'
        rows={4}
        cols={40}
        maxLength={1000}
      />
    </TextAreaLabel>
  );
};

const TextAreaLabel = styled.label`
  all: unset;
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const TextAreaLabelText = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
`;

const TextAreaWrapper = styled.textarea`
  all: unset;
  background-color: white;
  padding: 20px 15px;
  color: gray;
`;
