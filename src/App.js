import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isLiked: false
    };
  }
  componentDidMount() {
    let beerList = []
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(d => this.setState({ beers: d }))
  }
 
  render() {
    console.log(this.state.beers)
    console.log(this.state.isLiked)
    return (
      <div id="maindiv">
        <h1>Beer List!</h1>
        <ul>
          {this.state.beers.map(beer => {
            return <div className="beerCard"><li key={`beer-${beer.id} `}>{beer.name}<p>{beer.tagline}</p><p>{beer.description}</p><p>{beer.abv}</p>  <button onClick={() => this.setState({ isLiked: true })}>Like!</button></li></div>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
