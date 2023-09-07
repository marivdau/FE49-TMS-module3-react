import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Header } from './features/header/header';
import { TabDefault } from './features/tab/tabs';
import { Input } from './ui/input/input';
import { Textarea } from './ui/textarea/textarea';
import { Listposts } from './pages/list-of-posts';

function App() {
  const onClick = () => console.log('Button clicked!');

  return (
    <div>
      <Header />

      <h2>Lesson task #37 and Hometask #37</h2>

      <Title>Sign In</Title>

      <TabDefault></TabDefault>

      <div style={{margin: '50px'}}>
        <Button variant='primary' onClick={onClick}>
          Primary Button
        </Button>

        <Button variant='primary' onClick={onClick} disabled={true}>
          Primary Button Disabled
        </Button>

        <Button variant='secondary' onClick={onClick}>
          Secondary Button
        </Button>

        <Button variant='secondary' onClick={onClick} disabled={true}>
          Secondary Button Disabled
        </Button>

        <Button variant='secondary2' onClick={onClick}>
         Secondary 2 Button
        </Button>

        <Button variant='secondary2' onClick={onClick} disabled={true}>
          Secondary 2 Button Disabled
        </Button>
      </div>
 
      <h2>Lesson task #38 and Hometask #38</h2>

      <div style={{margin: '50px'}}>
        <Input labelText='Default input' />

        <Input labelText='Disabled input' disabled={true} />

        <Input labelText='Input with error' error='Field is required!' />
      </div>

      <div style={{margin: '50px'}}>
        <Textarea labelText='Textarea' />
      </div>

      <Listposts />      

    </div>
  );
}

export default App;
