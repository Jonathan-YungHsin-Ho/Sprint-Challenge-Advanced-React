import React from 'react';

export default function Filter(props) {
  const countries = [];

  props.data
    .map(info => info.country)
    .forEach(country => {
      if (!countries.includes(country)) {
        countries.push(country);
      }
    });

  return (
    <div>
      <select onChange={props.handleSelect}>
        <option value={''}>Click to filter by country...</option>
        <option value={''}>Show all</option>
        {countries.map(element => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
