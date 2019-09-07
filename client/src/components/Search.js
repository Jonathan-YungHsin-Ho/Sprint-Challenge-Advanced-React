import React from 'react';

export default function Search(props) {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search players...'
        onChange={props.handleSearch}
      />
    </div>
  );
}
