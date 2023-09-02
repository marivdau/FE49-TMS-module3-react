import React, { useState } from 'react';
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
import { Header } from './features/header/header';
import { Listposts } from './pages/list-of-posts';
import { TabPanel } from './features/tab/tab-lesson-example';

function App() {
  const onClick = () => console.log('click');
  const tabItems = [{id: '1', title: 'ye'}];
  const [activeTabIndex, setActiveTabIndex] = useState(tabItems[0].id);
  return (
    <div>
      <Header />

      {/* <TabPanel
        items={[
          { id:'1', title: 'title1' },
          { id:'2', title: 'title2' },
          { id:'3', title: 'title3' },
        ]}
        activeId={activeTabIndex}
        onTabClick={setActiveTabIndex}
      /> */}

      <Listposts />

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
