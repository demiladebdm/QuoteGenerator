import React from 'react';
import axios from 'axios';

// import components and styles
// import Home from './components/Home'
import './App.css';

class App extends React.Component {
     state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip; 
            
            this.setState({ advice });
        })
        .catch((err) => {
            console.log(err)
        })
  }

  render() {
    const { advice } = this.state;

    return (
      <div className='app'>
        <div className='card'>
          {/* The Best Quotes in the World! */}
          {/* <Home /> */}
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
