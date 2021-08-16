import React, { Component }  from 'react';
import ConditionalSection from './sections/conditional';

// _________________RENDER CONDICIONAL REACT_______________________

class App extends Component {
  render () {
    return ( <div className = 'App'>
      <ConditionalSection />
    </div>
    );
  }
}

// // // _________________INICIDALIZANDO EL ESTADO MEDIANTE PROPS_______________________

// class Contador extends Component{
//   constructor (props) {
//     super (props)
//     console.log(this.props.contadorInicial)
//     this.state = {contador : this.props.contadorInicial};
//     setInterval(() => {
//       this.setState({contador : this.state.contador + 1})
// }, 1000)
//   }
//   render () {
//     return <ContadorNumero numero = {this.state.contador}/>
//   }
// } 

// Contador.defaultProps = {
//   contadorInicial:10
// }

// class ContadorNumero extends Component {
//   render () {
//     console.log ('ContadorNumero render()')
//     return <span>{this.props.numero}</span>    
//   }
// }

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <p>Primer componenete con state</p>
//       <Contador contadorInicial = {300}/>
//     </div>
//     );
//   }
// }


// // _________________PROPAGACIÓN DE DATOS_______________________

// class Contador extends Component{
//   constructor () {
//     super ()
//     this.state = {contador : 1};
//     setInterval(() => {
//       this.setState({contador : this.state.contador + 1})
// }, 1000)
//   }
//   render () {
//     return <ContadorNumero numero = {this.state.contador}/>
//   }
// } 

// class ContadorNumero extends Component {
//   render () {
//     console.log ('ContadorNumero render()')
//     return <span>{this.props.numero}</span>    
//   }
// }

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <p>Primer componenete con state</p>
//       <Contador />
//     </div>
//     );
//   }
// }


// // // _________________PRIMER COMPONENETE CON STATE + SET STATE_______________________

// class Contador extends Component{
//   constructor () {
//     super ()
//     this.state = {contador : 1};
//     setInterval(() => {
//       this.setState({contador : this.state.contador + 1})
// }, 1000)
//   }
//   render () {
//     return <span>{this.state.contador}</span>;
//   }
// } 

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <p>Primer componenete con state</p>
//       <Contador />
//     </div>
//     );
//   }
// }



// // _________________ESTUDIO DEFAULT PROPS_______________________
// class Title extends Component {
//   render () {
//     return <h1>{this.props.text}</h1>
//   }
// }

// Title.defaultProps = {
//   text:'Hola Juan'
// }

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <Title text = 'Hola juan 2'/>
//     </div>

//     );
//   }
// }

// _________________ESTUDIO DE LAS PROPS_______________________

// import logo from './logo.svg';
// import './App.css';


// // function Hello (props) {
// //   return <h2>{props.title}</h2>
// // };

// // const Hello = (props) => <h2>{props.title}</h2>;

// class Hello extends Component {
//   render () {
//     return <div>
//       <h2>{this.props.title}</h2>
//       <h1>{this.props.number}</h1>
//     </div>
//   }
// };


// class Text extends Component {
//   render () {
//     const { 
//       arrayOfNumbers, 
//       muliply, 
//       objectWithInfo,
//       Title,
//     } = this.props
//     const mappedNumbers = arrayOfNumbers.map(this.props.muliply)
//     return <div>
//       {Title} 
//       <p>{mappedNumbers.join(', ')}</p>
//       <p>{objectWithInfo.Key1}</p>
//       </div>
//   }
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <Hello 
//         title = 'Esta es mi primera aplicación de react'
//         number = '3'/>
//         <Text
//         arrayOfNumbers = {[2,3,10]} 
//         objectWithInfo = {{Key1:'Valor', Key2:'Otro Valor'}}
//         isActivated 
//         muliply = {(number) => number * 3}
//         number={2} 
//         Text = 'Texto en String'
//         Title = {<h1>Este es el Titulo</h1>}
//         />
//     </div>
//   );
// }

export default App;


