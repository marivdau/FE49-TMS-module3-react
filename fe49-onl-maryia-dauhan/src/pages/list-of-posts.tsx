import styled from 'styled-components';
import { Postcard } from '../ui/postcard/postcard';
import { MediumPostcard } from '../ui/postcard/medium-postcards';
import { ShortPostcard } from '../ui/postcard/short-postcard';

export const Listposts: React.FC = () => {
  return (
    <PostsWrapper>
      <LeftListPosts>
        <Postcard
          id='1'
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsum'
          author='Mary Jane'
        />
        <MediumPosts>
          <MediumPostcard
            id='1'
            image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
            text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
            date='2023-12-01'
            lesson_num={4}
            title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
            author='Mary Jane'
          />

          <MediumPostcard
            id='1'
            image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
            text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
            date='2023-12-01'
            lesson_num={4}
            title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
            author='Mary Jane'
          />
        </MediumPosts>
      </LeftListPosts>

      <RightListPosts>
        <ShortPostcard
          id='1'
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author='Mary Jane'
        />
        <ShortPostcard
          id='1'
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author='Mary Jane'
        />
        <ShortPostcard
          id='1'
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author='Mary Jane'
        />
        <ShortPostcard
          id='1'
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2023-12-01'
          lesson_num={4}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author='Mary Jane'
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
