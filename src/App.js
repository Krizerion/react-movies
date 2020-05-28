import React from 'react';
import './App.css';
import CreateElementComponent from './components/CreateElement';
import JustComponent from './components/JustComponent';
import PureComponent from './components/PureComponent';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <CreateElementComponent></CreateElementComponent>
      <JustComponent></JustComponent>
      <ClassComponent></ClassComponent>
      <PureComponent></PureComponent>
      <FunctionalComponent></FunctionalComponent>
    </div>
  );
}

export default App;
