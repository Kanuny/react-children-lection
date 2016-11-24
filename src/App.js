import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './component/Modal';
import Tabs from './component/Tabs';
import Tab from './component/Tab';

function Header(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.desc} </h2>
      <button onClick={() => console.log(props.desc)} > X </button>
      <hr/>
    </div>
  )
}

class App extends Component {
  render() {
    const component = <Header title="test" desc="some desc" />;
    return (
      <div className="App">
        <Tabs>
          <Tab name="tab1"> content tab 1 </Tab>
          <Tab name="tab2"> content tab 2 </Tab>
          <Tab name="tab3"> content tab 3 </Tab>
          <div name="tav4"> test4 </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
