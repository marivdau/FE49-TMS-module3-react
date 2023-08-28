import React from 'react';
import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Initials } from './ui/user/initials/initials';
import { Username } from './ui/user/username/username';
import { Hamburger } from './features/hamburger/hamburger';
import { Tabs } from './features/tab/tabs';
import { Tab } from './features/tab/tab';
import { Textarea } from './ui/textarea/textarea';
import { Input } from './ui/input/input';
import { Postcard } from './ui/postcard/postcard';
import { ShortPostcard } from './ui/postcard/short-postcard';


function App() {
  const onClick = () => console.log('click')
  return (    
    <div>
      <Postcard 
        id='1' 
        image='https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
        text='Lorem ipsum lorem ipsum  ipsum loremipsum  ipsum lorem ipsum ipsumlorem ipsum  ipsumlorem ipsum  ipsum lorem ipsumipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum' 
        date='2023-12-01' 
        lesson_num={4} 
        title='My title lorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsumlorem ipsum  ipsum loremipsum  ipsum'
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

      {/* <Hamburger items={[{id:'1', title: 'title 1'}, {id:'2', title: 'title 2'}]} onClick={onClick} /> */}
      
      {/* <Button variant='primary' onClick={onClick}>Primary Button</Button> */}

      {/* <Title>Hello h1</Title> */}
      
      {/* <Initials firstName='Maryia' secondName='dauhan'></Initials> */}
      {/* <Username firstName='Maryia' secondName='dauhan'></Username> */}
      
      {/* <Tabs>
        <Tab title="Lorem">Lorem ipsum</Tab>
        <Tab title="Hey">Hey mama</Tab>
        <Tab title="Cat">Cat has fur</Tab>
      </Tabs> */}

      {/* <Textarea labelText='Text'></Textarea>*/}

      {/* <Input labelText='Title' disabled={false} /> */}

    </div>
  );
}

export default App;
