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
  const amountUp = 10;
  const amountDown = 2;
  const [voteUp, setVoteUp] = useState(amountUp);
  const [voteDown, setVoteDown] = useState(amountDown);
  const [userVotedLike, setUserVotedLike] = useState(false);
  const [userVotedDislike, setUserVotedDislike] = useState(false);

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
          <VoteButton
            type='button'
            onClick={() => {
              setUserVotedLike(!userVotedLike);
              if (!userVotedLike) {
                setVoteUp(voteUp + 1);
              } else {
                setVoteUp(voteUp - 1);
              }
            }}
            className={userVotedLike ? 'votedUp' : 'unvotedDwn'}
          >
            <ActionImg
              alt='like'
              src={require('../../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteUp}</ActionCounter>
          <VoteButton
            type='button'
            onClick={() => {
              setUserVotedDislike(!userVotedDislike);
              if (!userVotedDislike) {
                setVoteDown(voteDown + 1);
              } else {                
                setVoteDown(voteDown - 1);
              }
            }}
            className={userVotedDislike ? 'disVotedUp' : 'disVotedDwn'}
          >
            <ActionImg
              alt='dislike'
              src={require('../../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ActionCounter>{voteDown}</ActionCounter>
        </LikeDiv>
        <div>
          <ActionImg
            alt='bookmark'
            src={require('../../../images/bookmark-svgrepo-com.svg').default}
          />
          <ActionImg
            alt='dots'
            src={
              require('../../../images/dots-horizontal-svgrepo-com.svg').default
            }
          />
        </div>
      </SecondLineDiv>
    </PostcardWrapper>
  );
};

const PostcardWrapper = styled.div`
  background-color: #e8e8e8;
  width: 100%;

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
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

const DateDiv = styled.span`
  all: unset;
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  all: unset;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 10px;
  max-width: 100%;
`;

const Text = styled.p`
  all: unset;
  font-size: 18px;
  line-height: 32px;
  color: gray;
  max-width: 100%;
`;

const ImageParentDiv = styled.div`
  width: 400px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;

  &.votedUp {
    background-color: red;
  }

  &.unvotedDwn {
    background-color: transparent;
  }

  &.disVotedUp {
    background-color: aqua;
  }

  &.disVotedDwn {
    background-color: transparent;
  }
`;

const SecondLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
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
