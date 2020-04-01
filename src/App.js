import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from './components/Chips';
import ControlledExpansionPanels from './components/ControlledExpansionPanels'
import TitlebarGridList from './components/TitlebarGridList'
import Grid from '@material-ui/core/Grid';
import Me from './components/Me.jpg';
import SAP from './components/SAP.svg';
import Iaa from './components/Iaa.png';
import Visa from './components/Visa.svg';
import Walmart from './components/Walmart.svg';
import Tcs from './components/Tcs.png';
import SJSU from './components/SJSU.png';
import SRM from './components/SRM.jpeg';
import SimplePopover from './components/SimplePopover';
import Paper from '@material-ui/core/Paper';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
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

        <Container maxWidth='md' style={{ backgroundColor: '#0C2E45', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <Grid container spacing={3}>
            <Grid style={{ marginTop: '2%' }} item xs={12} sm={3}>
              <img style={{ borderRadius: '6%' }} src={Me} class="" width="120" height="150" alt="Dinesh" />
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{ color: '#FFFFFF' }}>Hi. I'm Dinesh</h2>
              <p className="intro">If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Dinesh Tathekalva. I'm a Senior Software Engineer, Frontend Engineer.
              I build web and mobile applications for a tech company. I also love and study astronomy during my free time.</p>
            </Grid>
          </Grid>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >

          </Typography>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#113A4D', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>SKILLS</h2>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <Chip skill='HTML5' />
            <Chip skill='CSS3' />
            <Chip skill='LESS' />
            <Chip skill='Sass' />
            <Chip skill='Javascript' />
            <Chip skill='ECMAScript 6' />
            <Chip skill='React.js' />
            <Chip skill='Redux' />
            <Chip skill='React Native' />
            <Chip skill='BootStrap' />
            <Chip skill='Material-UI' />
            <Chip skill='Angular.js' />
            <Chip skill='Karma' />
            <Chip skill='Jasmine' />
            <Chip skill='Enzyme' />
            <Chip skill='Jest' />
            <Chip skill='JIRA' />
            <Chip skill='Webpack' />
            <Chip skill='D3.js' />
            <Chip skill='Highcharts' />
            <Chip skill='TypeScript' />
            <Chip skill='Node.js' />
            <Chip skill='Git' />
            <Chip skill='Agile software development' />
            <Chip skill='Responsive Web Design' />
          </Typography>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#0F4657', padding: '2%', borderRadius: '5px', marginTop: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>PROJECTS</h2>
          <Typography component="div" style={{ justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <ControlledExpansionPanels COheading='Club ordering' VTPheading='Visa Travel Predict' IAAheading="Insurance Auto Auctions" SHheading='Stanford Health' CCSheading='Credit Card Shift'

              COskills='React.js, React Native, Redux, ES6, HTML5, CSS3, LESS' VTPskills='React.js, Redux, ES6, D3.js, HTML5, CSS3' IAAskills='React.js, Redux, ES6, HTML5, CSS3, Bootstrap'
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

        <Container maxWidth='md' style={{ backgroundColor: '#1F4E57', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>I WORKED AT</h2>
          <Paper>
            <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={12} sm={2}>
                <img src={Visa} class="" width="120" height="150" alt="Visa" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <img src={Walmart} class="" width="140" height="150" alt="Walmart" />
              </Grid>
              <Grid style={{ marginTop: '3%' }} item xs={12} sm={2}>
                <img src={Iaa} class="" width="120" height="90" alt="IAA" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <img src={SAP} class="" width="120" height="150" alt="SAP" />
              </Grid>
              <Grid style={{ marginTop: '3%' }} item xs={12} sm={2}>
                <img src={Tcs} class="" width="120" height="75" alt="Tcs" />
              </Grid>
            </Grid>
          </Paper>
          {/* <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
          </Typography> */}
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#235861', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>I GRADUATED FROM</h2>



          <Paper >

          <div style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <p>Masters from</p><img src={SJSU} class="" width="180" height="40" alt="SJSU" style={{ marginTop: '3%' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <p>Undergrad from</p><img src={SRM} class="" width="170" height="90" alt="SRM" />
              </Grid>
            </Grid>
          </div>




            <div style={{ flexGrow: '1' }}>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={6} sm={2}>
                </Grid>
                <Grid item xs={6} sm={2}>
                </Grid>
              </Grid>
            </div>
          </Paper>
          {/* <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
        
          </Typography> */}
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#286570', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <div style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h2 style={{ color: '#FFFFFF' }}>To know me better</h2>
                <SimplePopover />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2 style={{ color: '#FFFFFF' }}>Say Hi</h2>
                <SimplePopover />
              </Grid>
            </Grid>
          </div>
        </Container>

        <Container maxWidth='sm' style={{ backgroundColor: '#2C6F7A', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>Social Media</h2>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            {/* <TitlebarGridList/> */}
          </Typography>
        </Container>
      </div>
    </body>
  );
}
export default App;