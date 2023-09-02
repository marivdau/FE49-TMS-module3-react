import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  items: Array<{
    id: string;
    title: string;
  }>;
  onClick: () => void;
};

export const Hamburger: React.FC<Props> = ({ items, onClick }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <Humburger onClick={toggleHamburger}>
        <Burger
          className='burger1'
          style={{ transform: hamburgerOpen ? 'rotate(45deg)' : 'rotate(0)' }}
        ></Burger>
        <Burger
          className='burger2'
          style={{ transform: hamburgerOpen ? 'rotate(-45deg)' : 'rotate(0)' }}
        ></Burger>
      </Humburger>

      <ListWrapper style={{ display: hamburgerOpen ? 'block' : 'none' }}>
        {items.map(({ id, title }) => (
          <ListLineWrapper key={id}>{title}</ListLineWrapper>
        ))}
      </ListWrapper>
    </div>
  );
};

const ListWrapper = styled.ul`
  all: unset;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 30;
  width: 250px;
  height: 100px;
  border-radius: 0;
  background-color: #283ca4;
`;

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  background-color: #283ca4;
  color: white;
`;

const Humburger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
`;

const Burger = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: white;
  transform-origin: 4px;
  transition: all 0.3s linear;
`;
