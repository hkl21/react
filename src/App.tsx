import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn Typscript']} />
    </div>
  );
}

export default App;
