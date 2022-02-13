import React, { useState } from 'react';
import styles from './styles/App.css';
import Button from '@mui/material/Button';
import CardList from './components/CardList';
import MySelect from './components/MySelect';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';


function App() {
  const [cards, setCards] = useState(
    [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 8,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 7,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      }
    ]
  )

  const [selectedSort, setSelectedSort] = useState('');

  const removeCard = (card) => {
    setCards(cards.filter(p => p.id !== card.id))
  }

  const sortCards = (sort) => {
    console.log(sort)
    setSelectedSort(sort)
    setCards([...cards].sort((a,b)=> a[sort].localCompare(b[sort])))
  }

  async function fetchCards() {
    const response = await axios.get('http://jsonplaceholder.typicode.com/photos')
  }

  return (
    <div className="App">
      <Button variant="contained" disableElevation onChange={fetchCards}>
        Card list
      </Button>
      <div>
        <MySelect value={selectedSort}
          onChange={sortCards}
          defaultValue='sorting' 
          options={[
            { value: 'albumId', name: 'by albumId' }
          ]} />
      </div>
      {cards.length
        ? <CardList cards={cards} removeCard={removeCard} album='Album 1' />
        : <div>Cards not find !</div>
      }
    </div>
  );
};

export default App;
