import React, { useState } from 'react';

import Filter from './Filter';
import Search from './Search';
import PlayerCard from './PlayerCard';

export default function Players(props) {
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSelect = e => {
    setFilterValue(e.target.value);
  };

  const handleSearch = e => {
    setFilterValue('');
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className='filter-search'>
        <Filter data={props.data} handleSelect={handleSelect} />
        <Search handleSearch={handleSearch} />
      </div>
      <div className='players-wrapper'>
        {filterValue === ''
          ? props.data
              .filter(element =>
                JSON.stringify(element)
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()),
              )
              .map(player => <PlayerCard key={player.id} data={player} />)
          : props.data
              .filter(player => player.country === filterValue)
              .map(player => <PlayerCard key={player.id} data={player} />)}
      </div>
    </>
  );
}
