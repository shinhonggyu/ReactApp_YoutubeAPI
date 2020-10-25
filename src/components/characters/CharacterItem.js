import React from 'react'

const CharacterItem = ({ item, onVideoClick }) => {
  return (
    <div className='card' onClick={() => onVideoClick(item)}>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.snippet.thumbnails.high.url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.snippet.title}</h1>
          <li>
            <strong>Channel:</strong> {item.snippet.channelTitle}
          </li>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
