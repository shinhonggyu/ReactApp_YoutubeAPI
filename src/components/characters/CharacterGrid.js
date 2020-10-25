import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
import styles from '../characters/Character.module.css'

const CharacterGrid = ({ items, isLoading, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.cards

  return isLoading ? (
    <Spinner />
  ) : (
    <section className={`${displayType}`}>
      {items.map((item) => (
        <CharacterItem
          key={item.id}
          item={item}
          onVideoClick={onVideoClick}
        ></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
