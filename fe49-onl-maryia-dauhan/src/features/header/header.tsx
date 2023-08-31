import styled from 'styled-components';
import { Hamburger } from '../hamburger/hamburger';
import { Initials } from '../../ui/user/initials/initials';
import { Username } from '../../ui/user/username/username';
import { Input } from '../../ui/input/input';

export const Header = () => {
  const onClick = () => console.log('click');

  return (
    <HeaderWrapper>
      <div>
        <Hamburger
          items={[
            { id: '1', title: 'title 1' },
            { id: '2', title: 'title 2' },
          ]}
          onClick={onClick}
        />
      </div>
      <Input labelText='Label'></Input>
      <UserWrapper>
        <Initials firstName='Maryia' secondName='dauhan'></Initials>
        <Username firstName='Maryia' secondName='dauhan'></Username>
      </UserWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 100px;
`;

const UserWrapper = styled.div`
  margin-right: 20px;
`;
