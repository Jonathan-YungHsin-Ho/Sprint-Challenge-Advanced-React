import React from 'react';

import PlayerCard from './PlayerCard';

export default function Players(props) {
  return (
    <div>
      {props.data.map(player => (
        <PlayerCard key={player.id} data={player} />
      ))}
    </div>
  );
}
