import React from 'react'

const Search = () => {
  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor='searchInput'>
          <span className='ir'>검색</span>
        </label>
        <input 
          type="text" 
          name='serchInput'
          id='searchInput'
          autoComplete='off'
          className='search__Input'
          placeholder='검색어를 입력하세요'
        />
      </div>
    </div>

  )
}

export default Search