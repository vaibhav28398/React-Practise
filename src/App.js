import React,{Component} from 'react';
import './App.css';
import Component1 from './functional/component1'
import Component2 from './functional/component2'
import Component3 from './functional/component3'
import Container1 from './container/container1'
import Container2 from './container/container2'
import Container3 from './container/container3'

class App extends Component {

   name='d'
  render(){
    const styles={
      border:'solid',
      color:'pink'
    }
  return (
    <div className="App">
      This div is for external styling
      <button>hi</button>
      {this.name}

      <div style={styles}>
      this is for inline styling
    </div>
    
    {/* the following code is for creatig the  elements*/}
    {React.createElement(
      "div",
      {className:"Abc"},
      "React"
    )}

    <Component1 />
    <Component2 />

    {/* this shows how to use a prop in component*/}
    <Component3 name="Vaibhav"/>
    <Component3 name="Apoorv" age={24}/>

    {/* this shows how to use class based components and props*/}
    <Container1 name="Shephali" />

    {/* this shows how to use state properties*/}
    <Container2 name="Rajesh"/>

      {/* form */}
      <Container3 />
    </div>
    

    
  );
  }
}

const AppIns=new App()
console.log(AppIns)

export default App;
