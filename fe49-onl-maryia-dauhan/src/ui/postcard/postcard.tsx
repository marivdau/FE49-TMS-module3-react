import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export const Postcard: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);

  return (
    <PostcardWrapper key={id}>
      <FirstLineDiv>
        <CardInfo>
          <DateDiv>{formatDate(date)}</DateDiv>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </CardInfo>
        <ImageParentDiv>
          <Image src={image} />
        </ImageParentDiv>
      </FirstLineDiv>
      <SecondLineDiv>
        <LikeDiv>
          <VoteButton type='button' onClick={() => setVoteUp(voteUp + 1)}>
            <ActionImg
              alt='like'
              src={require('../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteUp}</ActionCounter>
          <VoteButton type='button' onClick={() => setVoteDown(voteDown + 1)}>
            <ActionImg
              alt='dislike'
              src={require('../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteDown}</ActionCounter>
        </LikeDiv>
        <div>
          <ActionImg
            alt='bookmark'
            src={require('../../images/bookmark-svgrepo-com.svg').default}
          />
          <ActionImg
            alt='dots'
            src={
              require('../../images/dots-horizontal-svgrepo-com.svg').default
            }
          />
        </div>
      </SecondLineDiv>
    </PostcardWrapper>
  );
};

const PostcardWrapper = styled.div`
  padding: 20px;
  background-color: #e8e8e8;

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 34px auto;
    width: 98%;
    height: 2px;
    background-color: lightgray;
  }
`;

const FirstLineDiv = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  max-width: 600px;
`;

const DateDiv = styled.span`
  all: unset;
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  all: unset;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 10px;
  max-width: 700px;
`;

const Text = styled.p`
  all: unset;
  font-size: 14px;
  line-height: 24px;
  color: gray;
  max-width: 800px;
`;

const ImageParentDiv = styled.div`
  width: 350px;
  height: 350px;
  margin-right: 10px;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

const ActionImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const ActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
