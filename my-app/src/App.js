import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';


// function Hello (props) {
//   return <h2>{props.title}</h2>
// };

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render () {
    return <div>
      <h2>{this.props.title}</h2>
      <h1>{this.props.number}</h1>
    </div>
  }
};


class Text extends Component {
  render () {
    const { 
      arrayOfNumbers, 
      muliply, 
      objectWithInfo,
      Title,
    } = this.props
    const mappedNumbers = arrayOfNumbers.map(this.props.muliply)
    return <div>
      {Title} 
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.Key1}</p>
      </div>
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Hello 
        title = 'Esta es mi primera aplicación de react'
        number = '3'/>
        <Text
        arrayOfNumbers = {[2,3,10]} 
        objectWithInfo = {{Key1:'Valor', Key2:'Otro Valor'}}
        isActivated 
        muliply = {(number) => number * 3}
        number={2} 
        Text = 'Texto en String'
        Title = {<h1>Este es el Titulo</h1>}
        />
    </div>
  );
}

export default App;


