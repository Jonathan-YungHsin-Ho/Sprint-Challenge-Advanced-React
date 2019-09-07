import React, { useState } from 'react';

import Filter from './Filter';
import Search from './Search';
import PlayerCard from './PlayerCard';

export default function Players(props) {
  const [filterValue, setFilterValue] = useState('');

  const handleSelect = e => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <div className='filter-search'>
        <Filter data={props.data} handleSelect={handleSelect} />
        {/* <Search /> */}
      </div>
      <div className='players-wrapper'>
        {filterValue === ''
          ? props.data.map(player => (
              <PlayerCard key={player.id} data={player} />
            ))
          : props.data
              .filter(player => player.country === filterValue)
              .map(player => <PlayerCard key={player.id} data={player} />)}
      </div>
    </>
  );
}
