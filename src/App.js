import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=AIzaSyDtzj05zAZTTUARhlC5dGLlyWKCwNNRpvQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setItems(result.items))
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=AIzaSyDtzj05zAZTTUARhlC5dGLlyWKCwNNRpvQ',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setItems(result.items))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <div className='container'>
      <Header />
      <Search onSearch={search} />
      <CharacterGrid items={items} />
    </div>
  )
}

export default App
