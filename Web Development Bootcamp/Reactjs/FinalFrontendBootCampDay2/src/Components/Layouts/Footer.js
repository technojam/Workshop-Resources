import React from 'react';

//material ui component

import { AppBar, Toolbar, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default props => (
  <div className="footer_container">
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
          className="footer_grid"
        >
          <Typography variant="body2" style={{ fontSize: "0.92rem" }}>
            Copyright © 2019 Team TechnoJam
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={50}>
          <Hidden mdUp>
            <div style={{ marginLeft: 'auto' }}>
              <a
              
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i
                  className="fa fa-twitter fa-lg"
                  style={{ color: "#28aae1",padding:"2px" }}
                ></i>

              </a>
            
              <a
              
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i
                  className="fa fa-facebook fa-lg"
                  style={{ color: "#3b5998",padding:"2px" }}
                ></i>

              </a>
             
              <a
               
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i
                  className="fa fa-instagram fa-lg"
                  style={{ color: "#e41a2b",padding:"2px" }}
                ></i>

              </a>
             
              <a
                
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i
                  className="fa fa-linkedin fa-lg"
                  style={{ color: "#0077b5",padding:"2px" }}
                ></i>

              </a>
            
            </div>
          </Hidden>
          <Hidden smDown>
            <div
              style={{
                paddingLeft: 'auto',
                paddingRight: 'auto',
                marginLeft: '90px'
              }}
            >
            <a
              
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >

              <i
                className="fa fa-twitter fa-lg"
                style={{ color: "#28aae1",padding:"2px" }}
              ></i>

            </a>
          
            <a
            
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >

              <i
                className="fa fa-facebook fa-lg"
                style={{ color: "#3b5998",padding:"2px" }}
              ></i>

            </a>
           
            <a
             
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >

              <i
                className="fa fa-instagram fa-lg"
                style={{ color: "#e41a2b",padding:"2px" }}
              ></i>

            </a>
           
            <a
              
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >

              <i
                className="fa fa-linkedin fa-lg"
                style={{ color: "#0077b5",padding:"2px" }}
              ></i>

            </a>
          
            </div>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid container direction="row">

            <div style={{ paddingLeft: '100px', paddingRight: 'auto' }}>
              <Typography style={{ fontFamily: 'Roboto' }}>

                Email us : <a href="mailto:technojam@galgotiasuniversity.edu.in" target="_top">technojam@galgotiasuniversity.edu.in</a>
              </Typography>
            </div>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  </div>
);
