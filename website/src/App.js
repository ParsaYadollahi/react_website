import React from 'react';
import logo from './logo.svg';
import './App.css';
import Email from './email'
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

class App extends React.Component {
  
  render() {
    return (
        <div className="fullpage">
            <div className="center_div">
              <div style={{ height : '100vh'}}>
                  <img src={require('./pourya_pic.jpg')} className="pourya_image"></img>
              <div className="image_center_div">
                  <p>ABBAS YADOLLAHI</p>
              </div>
              <div className="image_center_div_soft">
              <p>SOFTWARE ENGINEER</p>
              </div>
              <div>
              <IconButton onClick={()=> window.open("https://www.linkedin.com/in/abbas-yadollahi/", "_blank")} style={{color : 'white'}} aria-label="delete">
                <LinkedInIcon style={{fontSize : '50px'}} />
              </IconButton>
              <IconButton onClick={()=> window.open("http://github.com/thegirrafish", "_blank")} style={{color : 'white'}} aria-label="delete">
                <GitHubIcon style={{fontSize : '40px'}} />
              </IconButton>
              </div>
            </div>
          
          <div className="box">
            <Grid container spacing={3}>
              <Grid className="box_bottom_left" item xs={6}>
              <p className="company">SQUAREPOINT</p>
                <p className="date">JUNE - PRESENT</p>
                <p className="company">NATIVE TOUCH</p>
                <p className="date">MAY - AUG 2018 </p>
                <p className="company">CISCO</p>
                <p className="date">MAY - AUG 2017 </p>
                <p className="company">CISCO</p>
                <p className="date">MAY - AUG 2016 </p>
              </Grid>
              <Grid className="box_bottom_right" item xs={6}>
                <Email />
              </Grid>
            </Grid>
            <button ></button>
          </div>
        </div>
          



      </div>
    );
  }
}

export default App;
