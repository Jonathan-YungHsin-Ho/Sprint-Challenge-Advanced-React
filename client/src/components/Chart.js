import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Chart(props) {
  const countries = props.data.map(info => info.country);

  const countryCounts = {};
  countries.map(country => {
    countryCounts[country] = 1 + (countryCounts[country] || 0);
  });

  const countryArr = Object.entries(countryCounts).map(country => {
    return {
      country: country[0],
      players: country[1],
    };
  });

  return (
    <div className='chart-wrapper'>
      <h2>Players Searched by Country</h2>
      <BarChart
        width={800}
        height={300}
        data={countryArr}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='country' />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey='players' fill='#8884d8' />
      </BarChart>
    </div>
  );
}
