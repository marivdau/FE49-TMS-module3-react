import styled from 'styled-components';
import { Postcard } from '../ui/postcard/postcard';
import { MediumPostcard } from '../ui/postcard/medium-postcards';
import { ShortPostcard } from '../ui/postcard/short-postcard';

export const Listposts: React.FC = () => {
  return (
    <PostsWrapper>
      <LeftListPosts>
        <Postcard
          id={1}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsum'
          author={5}
        />
        <MediumPosts>
          <MediumPostcard
            id={2}
            image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
            text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
            date='2023-12-01'
            lesson_num={4}
            title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
            author={4}
          />

          <MediumPostcard
            id={3}
            image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
            text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
            date='2023-12-01'
            lesson_num={4}
            title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
            author={54}
          />
        </MediumPosts>
      </LeftListPosts>

      <RightListPosts>
        <ShortPostcard
          id={5}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={86}
        />
        <ShortPostcard
          id={6}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={34}
        />
        <ShortPostcard
          id={7}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={33}
        />
        <ShortPostcard
          id={8}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={9}
        />
      </RightListPosts>
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

const LeftListPosts = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
`;

const MediumPosts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const RightListPosts = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
`;
