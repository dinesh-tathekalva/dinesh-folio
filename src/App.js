import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Paper from './components/Paper';

function App() {
  return (
    <div className="App">
      <body>
        <Container> 
          <Paper elevation={0}/>
        </Container>
      </body>
    </div>
  );
}
export default App;