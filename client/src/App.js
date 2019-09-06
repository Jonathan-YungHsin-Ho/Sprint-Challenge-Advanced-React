import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Players from './components/Players';

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className='App'>
        <h2>Google Trends: Women's World Cup Players</h2>
        <p>
          This app pulls data about the Women's World Cup players ranked by
          search interest from Google Trends.
        </p>
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
