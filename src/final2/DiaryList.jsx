import React, { useState } from 'react';
import "./DiaryList.css"
import DiaryItem from './DiaryItem';

function DiaryList ({ diaries, onDelete }) {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue('');
  }

  const Filtered = diaries.filter((diary) =>
    diary.content.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div className='DiaryList'>
      <form className='search-container' onSubmit={handleSearchSubmit}>
        <input 
          className='searchBar' 
          placeholder='검색할 내용을 입력' 
          onChange={handleSearchChange}
          value={inputValue}
        />
        <button type='submit'>검색</button>
      </form>
      {Filtered.sort((a, b) => b.id - a.id).map((diary) => (
        <DiaryItem key={diary.id} {...diary} diary={diary} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DiaryList;