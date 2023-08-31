import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: string;
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
        <CardInfoWrapper>
          <DateWrapper>{formatDate(date)}</DateWrapper>
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper>{text}</TextWrapper>
        </CardInfoWrapper>
        <ImageParentDiv>
          <ImageWrapper src={image} />
        </ImageParentDiv>
      </FirstLineDiv>
      <SecondLineDiv>
        <LikeDiv>
          <VoteButton type='button' onClick={() => setVoteUp(voteUp + 1)}>
            <ActionImgWrapper
              alt='like'
              src={require('../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteUp}</ActionCounter>
          <VoteButton type='button' onClick={() => setVoteDown(voteDown + 1)}>
            <ActionImgWrapper
              alt='dislike'
              src={require('../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteDown}</ActionCounter>
        </LikeDiv>
        <div>
          <ActionImgWrapper
            alt='bookmark'
            src={require('../../images/bookmark-svgrepo-com.svg').default}
          />
          <ActionImgWrapper
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
  max-width: 500px;

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

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const DateWrapper = styled.span`
  all: unset;
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.h2`
  all: unset;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 10px;
  width: 300px;
`;
const TextWrapper = styled.p`
  all: unset;
  font-size: 14px;
  line-height: 24px;
  color: gray;
  max-width: 300px;
`;

const ImageParentDiv = styled.div`
  width: 170px;
  height: 170px;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
`;

const ActionImgWrapper = styled.img`
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
