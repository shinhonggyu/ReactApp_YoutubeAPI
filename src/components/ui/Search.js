import React, { useRef } from 'react'

const Search = ({ onSearch }) => {
  const inputRef = useRef()
  const handleSearch = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className='search'>
      <div>
        <input
          ref={inputRef}
          type='text'
          className='form-control'
          placeholder='Search...'
          onKeyPress={onKeyPress}
          autoFocus
        />
      </div>
    </section>
  )
}

export default Search
