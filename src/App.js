import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Paper from './components/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from './components/Chips';
import ControlledExpansionPanels from './components/ControlledExpansionPanels'
// import Container from './components/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import MediaCard from './components/MediaCard';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


function App() {
  return (
    <body>
      <div className="App">
        {/* <Container maxWidth='lg' style={{ backgroundColor: '#666666', padding: '2%', borderRadius: '5px', marginTop: '2%' }}>
          <Typography component="div" style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%', flexWrap: 'wrap' }} >
            <Paper />
            <Paper > <img src="MaterialUI.svg"  height="42" width="42" /> </Paper>
            <Paper />
            <Paper />
            <Paper />
            <Paper />
            <Paper />
            <Paper />
            <Paper />
          </Typography>
        </Container> */}
        <Container maxWidth='sm' style={{ backgroundColor: '#666666', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
        <h2 style={{color: '#FFFFFF'}}>SKILLS</h2>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <Chip skill='HTML5' />
            <Chip skill='CSS3' />
            <Chip skill='Javascript' />
            <Chip skill='React.js' />
            <Chip skill='Redux' />
            <Chip skill='React Native' />
            <Chip skill='BootStrap' />
            <Chip skill='Material-UI' />
            <Chip skill='Angular.js' />
            <Chip skill='ES6' />
            <Chip skill='Webpack' />
            <Chip skill='D3.js' />
            <Chip skill='TypeScript' />
            <Chip skill='Node.js' />
            <Chip skill='Responsive Web Design' />
          </Typography>
        </Container>
        <Container maxWidth='sm' style={{ backgroundColor: '#666666', padding: '2%', borderRadius: '5px', marginTop: '2%' }}>
        <h2 style={{color: '#FFFFFF'}}>PROJECTS</h2>
          <Typography component="div" style={{ fontWeight: '100+!important' ,justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <ControlledExpansionPanels COheading='Club ordering' VTPheading='Visa Travel Predict' IAAheading='Insurance Auto Auction' SHheading='Stanford Health' CCSheading='Credit Card Shift'

              COskills='React.js, React Native, Redux, ES6, HTML5, CSS3' VTPskills='React.js, Redux, ES6, D3.js, HTML5, CSS3' IAAskills='React.js, Redux, ES6, HTML5, CSS3, Bootstrap' 
              SHskills='React.js, Redux, JavaScript, HTML5, CSS3, SAP HANA' CCSskills='JQuery, HTML, CSS, JAVA, MySQL'
              
              COcontent='Club ordering is an internal web and mobile application developed for the
              associates who work at the Samsclub for restocking the items that are running out in the club. The admin portal which is a web based single page
              application built using React.js. React Native based mobile application is used by the associates at clubs for scanning and placing the orders for
              restocking at the club. Redux is used for state management in both web and mobile applications.'

              VTPcontent="Visa Travel Predict is a suite of predictive machine learning scores related
              to a cardholder's travel behavior that can help banks identify the right cardholders for marketing campaigns which is a React.js based application.
              Targeted marketing campaigns could then help improve a cardholder's travel experience by providing more relevant offers and help increase cross
              border payments."

              IAAcontent='Insurance Auto Auctions is a car bidding single page application. The
              customer can go through the thousands of used/ totaled cars using fast and advanced search, bid online and have them shipped anywhere in the united
              states. The application is built using .net in the back-end and React.js in the front-end. Redux was used for the state management of the application.'

              SHcontent='Stanford Health is an application which can process the clinical and
              genomical data of the patient within seconds with the power of SAP HANA in the back-end and React.js in the front-end. I also worked on the back-end
              model which displays the health records of the patients in a time line and developed the front end using React.js and state managment with Redux.
              The application was built on multidimensional analysis which might be a future SAP patent.'

              CCScontent=' Credit card shift is an internal
              application used by Bank of America to change the segment of the credit card on the customer request.  The application also allows to process
              and handle the international transactions between Bank of America and other banks to transfer the money from various banks to Bank of America
              finding the minimum legs between banks when there is no direct contract. I developed the front-end of the application using HTML, CSS and JQuery'
              />
          </Typography>
        </Container>
      </div>
    </body>
  );
}
export default App;