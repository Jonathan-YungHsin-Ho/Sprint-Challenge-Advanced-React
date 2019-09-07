import React from 'react';
import './App.css';

import data from './data';

import Nav from './components/Nav';
import Chart from './components/Chart';
import Players from './components/Players';

class App extends React.Component {
  state = {
    data: data.data,
    // data: [],
  };

  // componentDidMount() {
  //   fetch('http://localhost:5000/api/players')
  //     .then(res => res.json())
  //     .then(res => this.setState({ data: res }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Chart data={this.state.data} />
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
