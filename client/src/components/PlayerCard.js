import React from 'react';

export default function PlayerCard(props) {
  return (
    <div className='player-card'>
      <a
        href={`http://www.google.com/search?q=${props.data.name
          .split(' ')
          .join('+')}`}
        target='_blank'
        rel='noopener noreferrer'>
        <h3>
          <span role='img' aria-label='soccer ball emoji'>
            ⚽
          </span>{' '}
          {props.data.name}{' '}
          <span role='img' aria-label='soccer ball emoji'>
            ⚽
          </span>
        </h3>
        <p>{props.data.country}</p>
        <p>Google Searches: {props.data.searches}</p>
      </a>
    </div>
  );
}
