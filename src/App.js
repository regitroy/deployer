import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
      <div className="App">
        <Counter count={0}/>
      </div>
  );
}

export default App;
