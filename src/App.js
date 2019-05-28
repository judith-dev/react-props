import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}
class Text extends Component{
  render(){
    const {
      isActivated, 
      arraysOfNumbers, 
      multiply,
      objectWithInfo,
      title
    } = this.props;

  const mapednumber =  arraysOfNumbers.map(multiply)

   return <div> 
              {title}
              <p>{mapednumber.join(', ')}</p>
              <p>{objectWithInfo.key}</p>
         </div>
 }

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Hello title="Hola from props"></Hello>

         <Text 
              arraysOfNumbers={[1,2,3]}
              objectWithInfo ={{key:'First value','key2':'otherValue'}}
              multiply={(number) => number * 4}
              number={2} 
              text={'texto en string'} 
              title={<h1>Este es el titulo</h1>}

               >
          </Text>

        </header>
      </div>
    );
  }
}

export default App;
