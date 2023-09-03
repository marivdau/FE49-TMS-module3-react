import styled from 'styled-components';
import { Postcard } from '../ui/postcard/default-postcard/default-postcard';
import { MediumPostcard } from '../ui/postcard/medium-postcard/medium-postcards';
import { ShortPostcard } from '../ui/postcard/short-postcard/short-postcard';

export const Listposts: React.FC = () => {
  return (
    <PostsWrapper>
      <LeftListPosts>
        <Postcard
          id={1}
          image='https://i.pinimg.com/564x/2d/9f/67/2d9f676a7210c693186dac6c61a17ac9.jpg'
          text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
          date='2023-08-27'
          lesson_num={1}
          title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          author={1}
        />
        <MediumPosts>
          <MediumPostcard
            id={2}
            image='https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?resize=1200:*'
            text='Text'
            date='2021-10-07'
            lesson_num={48}
            title='Title'
            author={7}
          />

          <MediumPostcard
            id={3}
            image='https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg'
            text='Hello!'
            date='2021-10-07'
            lesson_num={23}
            title='B-52!'
            author={97}
          />
        </MediumPosts>
      </LeftListPosts>

      <RightListPosts>
        <ShortPostcard
          id={4}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-OIxaEUXt1hRTfwYqheReCtGgYRLXs5kgA&usqp=CAU'
          text='Hi'
          date='2021-10-07'
          lesson_num={22}
          title='b-52'
          author={97}
        />
        <ShortPostcard
          id={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeA6FZbi76RPRNyYKQq-Zl2ydCn3wLFuC7w&usqp=CAU'
          text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum'
          date='2021-10-07'
          lesson_num={59}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={97}
        />
        <ShortPostcard
          id={6}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioKtl1g_j5_lpYtD_sstoUtkRqW2xxYtlFA&usqp=CAU'
          text='Hello'
          date='2021-10-07'
          lesson_num={44}
          title='b-52'
          author={99}
        />
        <ShortPostcard
          id={7}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Hello2'
          date='2021-10-07'
          lesson_num={441}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={99}
        />
        <ShortPostcard
          id={8}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Hello2'
          date='2021-10-07'
          lesson_num={441}
          title='My title lorem ipsum  ipsum loremipsum  ipsum lorem ipsum  ipsum loremipsum  ipsum'
          author={99}
        />
        <ShortPostcard
          id={9}
          image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
          text='Hello2'
          date='2021-10-07'
          lesson_num={441}
          title='My title lorem '
          author={99}
        />
      </RightListPosts>
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftListPosts = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  max-width: 60vw;
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
  max-width: 40vw;
`;
