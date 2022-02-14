import React, { useEffect, useState } from 'react';
import styles from './styles/App.css';
import Button from '@mui/material/Button';
import CardList from './components/CardList';
import MySelect from './components/MySelect';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import CardService from './API/CardService';
import Loader from './components/Loader';
import { getPagesArray, getPagesCount } from './utils/Pages'


function App() {
  const [cards, setCards] = useState([])
  const [selectedSort, setSelectedSort] = useState('');
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(100)
  const [page, setPage] = useState(1)

  let pagesArray = getPagesArray(totalPages)

  useEffect(() => {
    fetchCards()
  }, [page])

  const removeCard = (card) => {
    setCards(cards.filter(p => p.id !== card.id))
  }

  const sortCards = (sort) => {
    console.log(sort)
    setSelectedSort(sort)
    setCards([...cards].sort((a, b) => a[sort].localCompare(b[sort])))
  }

  const changePage = (page) => {
    setPage(page)
  }

  async function fetchCards() {
    setIsCardsLoading(true)
    const response = await CardService.getAll(limit, page)
    setCards(response.data);
    setIsCardsLoading(false);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  }

  return (
    <div className="App">
      <Button variant="contained" >
        Card list
      </Button>
      {/* <div>
        <MySelect value={selectedSort}
          onChange={sortCards}
          defaultValue='sorting' 
          options={[
            { value: 'albumId', name: 'by albumId' }
          ]} />
      </div> */}
      <div>
        {pagesArray.map(p =>
          <Button key={p} onClick={() => changePage(p)}>{p}</Button>
        )}
      </div>
      {isCardsLoading
        ? <Loader />
        : <div className={styles.card}>
          <CardList cards={cards} removeCard={removeCard} album='Album 1' />
        </div>
      }
    </div>
  );
};

export default App;
