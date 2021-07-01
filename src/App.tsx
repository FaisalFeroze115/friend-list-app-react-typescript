import React, {useState} from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Elon Musk",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dezeen.com%2F2021%2F06%2F08%2Felon-musk-greatest-architect-jan-boelen%2F&psig=AOvVaw1gNBRLFnPNouKuoWAB15bP&ust=1625228203885000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMjR2oDtwfECFQAAAAAdAAAAABAD",
      age: 28,
      note: "esfdfdsfdse"
    }
  ]);


  return (
    <div className="App">
      <h1>My Friends</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
