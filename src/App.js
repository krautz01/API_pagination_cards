import React, { useEffect, useState } from 'react';
import s from './styles/App.css';
import Button from '@mui/material/Button';
import CardList from './components/CardList';
import CardService from './API/CardService';
import Loader from './components/Loader';
import { getPagesArray, getPagesCount } from './utils/Pages'
import { Pagination, Stack } from '@mui/material';


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
      <div>
        {/* pagesArray.map(p =>
        <Button key={p} onClick={() => changePage(p)}>{p}</Button>
      ) */}
        <Pagination count={totalPages} page={page} onChange={(_, page) => { setPage(page) }} />
      </div>
      {isCardsLoading
        ? <Loader />
        : <CardList cards={cards} removeCard={removeCard} album='Album 1' />
    
      }
    </div>
  );
};

export default App;

{/* <div>
        <MySelect value={selectedSort}
          onChange={sortCards}
          defaultValue='sorting' 
          options={[
            { value: 'albumId', name: 'by albumId' }
          ]} />
      </div> */}
