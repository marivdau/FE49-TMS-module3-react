import styled from 'styled-components';
import { Hamburger } from '../hamburger/hamburger';
import { Initials } from '../../ui/user/initials/initials';
import { Username } from '../../ui/user/username/username';
import { useState } from 'react';

export const Header = () => {
  const onClick = () => console.log('Button clicked!');
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <HeaderWrapper>
      <NavArea onClick={toggleHamburger}>
        <Hamburger
          items={[
            { id: '1', title: 'Menu item 1' },
            { id: '2', title: 'Menu item 2' },
          ]}
          onClick={onClick}
        />
      </NavArea>
      <SearchArea>
        <SearchInput
          type='text'
          placeholder='Search...'
          maxLength={100}
          style={{ visibility: !hamburgerOpen ? 'visible' : 'hidden' }}
        />
        <CloseButton
          type='button'
          style={{ visibility: !hamburgerOpen ? 'visible' : 'hidden' }}
        >
          <CloseImage
            alt='close'
            src={require('../../images/close-svgrepo-com.svg').default}
          />
        </CloseButton>
        <SearchButton type='button'>
          <SearchImage
            alt='search'
            src={require('../../images/search-svgrepo-com.svg').default}
          />
        </SearchButton>
      </SearchArea>
      <UserWrapper>
        <Initials firstName='Maryia' secondName='dauhan' />
        <Username firstName='Maryia' secondName='dauhan' />
      </UserWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #283ca4;
  height: 70px;
`;

const NavArea = styled.div`
  padding: 20px;
`;

const SearchArea = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
`;

const SearchInput = styled.input`
  all: unset;
  height: 70px;
  width: 1000px;
  color: white;
  border: none;
  padding: 0 20px;
  background-color: #5864c4;

  &::placeholder {
    color: lightgray;
    font-size: 18px;
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: #5864c4;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
const CloseImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const SearchButton = styled.button`
  background-color: transparent;
  width: 69px;
  height: 69px;
  cursor: pointer;
  border: 1px solid gray;
`;

const SearchImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const UserWrapper = styled.div`
  margin-right: 20px;
`;
