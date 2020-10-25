import React, { useState, useEffect } from 'react'
import styles from './app.module.css'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import VideoDetail from './components/videodetail/VideoDetail'
import './App.css'

const App = ({ youtube }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (item) => {
    setSelectedVideo(item)
  }

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
    <div className={styles.app}>
      <Header />
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <CharacterGrid
            items={items}
            isLoading={isLoading}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  )
}

export default App
