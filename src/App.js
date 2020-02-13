import React, {Component} from 'react';
// import Quotes from './components/quotes/Quotes'
import './App.css';
import axios from 'axios'
import DisplayQuote from './components/quotes/Quotes';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: []
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
     
      // Use this data to update the state
      .then(data => {
        console.log (data[0])
       this.setState({
          quote: data[0],
        });
    });
  }
  

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}



// class App extends Component {
//   state={
//     data: [],
//         // character:'',
//         // quote:[],
//     isLoading: true
//   }
//   async componentDidMount(){
//     const data = await axios("https://simpsons-quotes-api.herokuapp.com/quotes?count=num")
//     this.setState({
//        data
//       ,
//         isLoading : false
//       })
//       console.log(data);
//  };
//   render() {
//   return (
//     <div>
//       <h1>{this.state.data.quote}</h1>
//       <hr></hr>
//     </div>
//   );
// }}

export default App;
