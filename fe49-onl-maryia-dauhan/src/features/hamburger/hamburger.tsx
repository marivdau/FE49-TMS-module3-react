import { useState } from "react";
import styled from "styled-components";

type Props = { 
  items: Array<{
    id: string;
    title: string;
  }>   
  onClick: () => void; 
};

export const Hamburger: React.FC<Props> = ({ items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <div>  
      <BurgerButton type='button' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '='}
        {/* <BurgerLines className="line1"></BurgerLines>
        <BurgerLines className="line2"></BurgerLines> */}
      </BurgerButton>
      <ListWrapper style={{display: isOpen ? 'block' : 'none'}}>
        {items.map(({id, title}) => <ListLineWrapper key={id}>{title}</ListLineWrapper>)}
      </ListWrapper>
    </div>
  )
};

const BurgerButton = styled.button`
  all: unset;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 30;
  width: 30px;
  height: 30px;
  border-radius: 5%;
  cursor: pointer;
  text-align: center;
  line-height: 30px;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: lightblue;
  }
`

const ListWrapper = styled.ul`
  all: unset;
  position: fixed;
  top: 40px;
  left: 10px;
  z-index: 30;
  width: 250px;
  height: 100px;
  border-radius: 5%;
  background-color: lightblue;
`

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  background-color: lightblue;
`;

const BurgerLines = styled.span`
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: black;
  transition: 0.4s;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    transition: 0.4s;
  }

  &::after {
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    transition: 0.4s;
    content: '';
    top: 12px;
  }

  & .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }
`;
