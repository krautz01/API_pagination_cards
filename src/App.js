import React, { useEffect, useState } from 'react';
import './styles/App.css'
import Button from '@mui/material/Button';
import CardList from './components/CardList';
import CardService from './API/CardService';
import Loader from './components/Loader';
import { getPagesArray, getPagesCount } from './utils/Pages'
import { Pagination } from '@mui/material';
import Typography from '@mui/material/Typography';


function App() {
  const [cards, setCards] = useState([])
  const [selectedSort, setSelectedSort] = useState('');
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [isList, setIsList] = useState(false)

  let pagesArray = getPagesArray(totalPages)

  useEffect(() => {
    fetchCards()
  }, [page])

  const removeCard = (card) => {
    setCards(cards.filter(p => p.id !== card.id))
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

  const getCardList = () => {
    return (
      <div>
        <div>
          <Pagination style={{ marginTop: 5 }} count={totalPages} page={page} onChange={(_, page) => { setPage(page) }} />
        </div>
        {isCardsLoading
          ? <Loader />
          : <CardList cards={cards} removeCard={removeCard} album='Album 1' />
        }
      </div>
    )
  }

  return (
    <div className="App">
      <Button variant="contained" style={{ marginTop: 5 }} onClick={(isList) => setIsList(true)}>
        GET CARDLIST
      </Button>
      {isList
        ? getCardList()
        : <Typography>Click on button !</Typography>}
    </div>
  );
};

export default App;
