import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
    };
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(d => this.setState({beers: d}))
  }
  render() {
    return <div></div>
  }
}

export default App;
