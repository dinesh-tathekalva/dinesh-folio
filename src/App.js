import React, { Component } from 'react';
import './App.css';
// import Container from './components/Container';
import Container from '@material-ui/core/Container';
import Paper from './components/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import MediaCard from './components/MediaCard';


function App() {
  return (
    <div className="App">
      <Container maxWidth='lg' style={{ backgroundColor: '#666666', padding:'2%', borderRadius:'5px'}}>
        <Typography component="div" style={{display:'flex', justifyContent:'center' , color:'#FFFFFF', height: '25%', width: '100%', flexWrap: 'wrap'}} >
           <Paper />
           <Paper />
           <Paper />
           <Paper />
           <Paper />
           <Paper />
           <Paper />
           <Paper />
           <Paper />
        </Typography>
      </Container>
      <Container maxWidth='lg' style={{ backgroundColor: '#666666', padding:'2%', borderRadius:'5px'}}>
        <Typography component="div" style={{ display:'flex', justifyContent:'center', color:'#FFFFFF', height: '25%', width: '100%'}} >
           <MediaCard name='Visa' content='Worked on Visa travel' />
           <MediaCard name='Visas' content='Worked on Visa travel' />
           <MediaCard name='Vissssa' content='Worked on Visa travel' />
           <MediaCard name='Visaasa' content='Worked on Visa travel' />
           <MediaCard name='dff' content='Worked on Visa travel' />
           <MediaCard name='Visgfgdfga' content='Worked on Visa travel' />
        </Typography>
      </Container>
    </div>
  );
}
export default App;