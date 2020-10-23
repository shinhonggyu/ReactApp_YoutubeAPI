import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'

const App = ({ youtube }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setItems(items))
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setItems(items))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <div className='container'>
      <Header />
      <Search onSearch={search} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  )
}

export default App
