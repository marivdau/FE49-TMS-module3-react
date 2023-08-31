import { useState } from 'react';
import styled from "styled-components";

type Props = {
  id: string;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: string
}

export const ShortPostcard: React.FC<Props> = ({ id, image, text, date, lesson_num, title, author }) => {
  const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: "numeric",
    month: "long",
    day: "numeric",
  };
    return new Date(dateString).toLocaleDateString([], options);
  };

  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);

  return (
    <ShortPostcardWrapper key={id}>
      <ShortFirstLineWrapper>
        <ShortCardFirstLine>
          <ShortDateWrapper>{formatDate(date)}</ShortDateWrapper>
          <ShortTitleWrapper>{title}</ShortTitleWrapper>
        </ShortCardFirstLine>
        <ShortImageParentDiv>
          <ImageWrapper src={image} />
        </ShortImageParentDiv>
      </ShortFirstLineWrapper>
      <ShortSecondLineWrapper> 
        <ShortLikeDiv>
          <VoteButton type='button' onClick={() => setVoteUp(voteUp + 1)}>
            <ShortActionImageWrapper alt='like' src={require('../../images/like-svgrepo-com.svg').default} />
          </VoteButton>
          <ShortActionCounter>{voteUp}</ShortActionCounter>
          <VoteButton type='button' onClick={() => setVoteDown(voteDown + 1)}>
            <ShortActionImageWrapper alt='dislike' src={require('../../images/dislike-svgrepo-com.svg').default} />
          </VoteButton>
          <ShortActionCounter>{voteDown}</ShortActionCounter>
        </ShortLikeDiv>
        <div>
        <ShortActionImageWrapper alt='bookmark' src={require('../../images/bookmark-svgrepo-com.svg').default} />
        <ShortActionImageWrapper alt='dots' src={require('../../images/dots-horizontal-svgrepo-com.svg').default} />
        </div>
      </ShortSecondLineWrapper>
    </ShortPostcardWrapper>
  )
}

const ShortPostcardWrapper = styled.div`
  padding: 20px;
  background-color:	#E8E8E8;
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

const ShortFirstLineWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
`;

const ShortCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;  
  margin-right: 10px;
  justify-content: space-between;
  width: 80%;
`;

const ShortDateWrapper = styled.span`
  all: unset;
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const ShortTitleWrapper = styled.h2`
  all: unset;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;  
  margin-bottom: 10px;
`
const ShortImageParentDiv = styled.div`
  width: 80px;
  height: 80px;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShortSecondLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: auto;
`;

const ShortLikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const ShortActionImageWrapper = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const ShortActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
