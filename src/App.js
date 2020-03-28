import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import Avatar from './components/Avatar'
import Tooltip from './components/ToolTip'
import Paper from './components/Paper'
// import Skills from './Skill.json'

function App() {
  return (
    <div className="App">
      <body>
        <Container> 
          <Paper elevation={0} />
        </Container>
      </body>
    </div>
  );
}
export default App;