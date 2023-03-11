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

  // fetchAdvice2 = () => {
  //   axios.get('https://api.kanye.rest/text')
  //       .then((response) => {
  //           // const { advice } = response.data.slip; 
            
  //           console.log(response.data)
  //       })
  //       .catch((err) => {
  //           console.log(err)
  //       })
  // }
  fetchAdvice = () => {
    axios.get('https://api.kanye.rest')
        .then((response) => {
            const { quote } = response.data; 
            
            this.setState({ quote });
        })
        .catch((err) => {
            console.log(err)
        })
  }

  render() {
    const { quote } = this.state;

    return (
      <div className='app'>
        <h1>The Best <b><i>Ye</i></b> Quotes in the World!</h1>  
        <div className='card'>
          
          {/* <Home /> */}
          <h1 className='heading'>{quote}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
