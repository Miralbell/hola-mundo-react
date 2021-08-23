import React, { Component }  from 'react';
import EjemploCicloDeActualización from './sections/components/willreciveprops.js'




// // // // CICLO DE ACTUALIZACIÓN_______________________

class App extends Component {
  render () {
    return (<div>
      <EjemploCicloDeActualización/>
    </div>
    );
  }
}

// // // // COMPONENET FETCH_______________________

// import FetchExample from './sections/components/FetchExample.js'

// class App extends Component {
//   render () {
//     return (<div>
//       <FetchExample />
//     </div>
//     );
//   }
// }
// // // // // COMPONENET DIDMOUNT_______________________

// class App extends Component {
//   render () {
//     return (<div>
//       <ComponentDidMount />
//     </div>
//     );
//   }
// }

// // // // CHILDREN Y PROPTYPES EN REACT_______________________

// import PropTypes from 'prop-types';

// class Box extends Component {
//   render () {
//     return (<div style= {{border:'1px solid #09f', margin: 5, padding: 5}}>
//     {this.props.children}
//     </div>)
//   }
// }

// class Article extends Component {
//   static propTypes = {
//     author: PropTypes.string.isRequired
//   }
//   render () {
//     const {author,children,date, title} = this.props
//     return (
//       <section>
//         <h2>{title}</h2>
//         {author && <p><em>Escrito por {author}</em></p>}
//         <Box>{date}</Box>
//         <article>
//           {children}
//         </article>
//       </section>
//     )
//   }
// }


// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <h4> Children Y PropTypes</h4>
//       <Article 
//       date={new Date().toLocaleDateString()}
//       title='Articulo sobre la prop Children'
//       >
//         <p>El contenido que envolvemos dentro del compononente articulo será enviado al componenete como this.props.children</p>
//         <strong>Y mantiene las etiquetas que hayais añadido dentro</strong>
//       </Article>
//     </div>
//     );
//   }
// }


// // // _________________FORMULARIOS EN REACT_______________________

// import Forms from './sections/forms.js'

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <Forms />
//     </div>
//     );
//   }
// }


// // // _________________FORMULARIOS EN REACT_______________________

// import Forms from './sections/forms.js'

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <Forms />
//     </div>
//     );
//   }
// }

// // // _________________Eventos on click_______________________

// class App extends Component {
//   constructor () {
//     super ()
//     this.state = {mouseX : 0, mouseY: 0}
//     // this.handleMouseMove = this.handleMouseMove.bind(this)
//   }

//   handleMouseMove = (e) => {
//     const {clientX, clientY} = e
//     this.setState({mouseX: clientX, mouseY: clientY})
//   }


//   handleClick (e) {
//     alert('Hi There!!')
//   }
//   render () {
//     return ( <div className = 'App'>
//       <h4>Eventos</h4>
//       <button onClick = {this.handleClick}>Hi There !</button>
//       <div 
//       onMouseMove={this.handleMouseMove}
//       style = {{border:'1px solid #000', marginTop: 10, padding:10}}>
//         <p>{this.state.mouseX}, {this.state.mouseY}</p>
//       </div>

//     </div>
//     );
//   }
// }

// // _________________TRABAJANDO CON LISTADOS de objetos_______________________

// import cars from './data/cars.json'

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <h4>Trabajando con listas con objetos</h4>
//       <ul>
//         {cars.map(
//           car => {
//             return (
//               <li key = {car.id}>
//                  <p><strong>Nombre</strong>: {car.name}</p>
//                  <p>Marca : {car.company}</p>
              
//               </li>
              
//             )
//           }
//         )}
//       </ul>
//     </div>
//     );
//   }
// }



// // _________________TRABAJANDO CON LISTADOS_______________________

// class App extends Component {
//   render () {
//     const number = [1,1,2,3,4,5]
//     return ( <div className = 'App'>
//       <h4>Trabajando con listas</h4>
//       {number.map(number => {
//         return <p key = {number}>Soy el Número {number}</p>
//       })}
//     </div>
//     );
//   }
// }



// _________________RENDER CONDICIONAL REACT_______________________

// class App extends Component {
//   render () {
//     return ( <div className = 'App'>
//       <ConditionalSection />
//     </div>
//     );
//   }
// }

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


