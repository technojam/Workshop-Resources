### Lets Dive in 

#####
npm install --save react-fontawesome

### open public/index.html
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

##### lets add a footer
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
                  Copyright © 2019 Ravi Nandan Saxena
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

### Now Lets Create Aboutus Component
          import React from 'react';
      //material ui Component
      import Container from '@material-ui/core/Container';
      import Card from '@material-ui/core/Card';
      import Grid from '@material-ui/core/Grid';
      import Typography from '@material-ui/core/Typography';
      import CardMedia from '@material-ui/core/CardMedia';
      import CardContent from '@material-ui/core/CardContent';


      const Aboutus = () => (
         <Container maxWidth='lg'>
            <div className='aboutus view_container'>


               <br />
               <br />
               <br />
               <br />
               <div>
                  <Grid container direction='row' justify='center' alignItems='center' spacing={6}>
                     <Grid item lg={6} md={6} sm={12} alignItems='center'>
                        <Card className='card--shadow card_style' style={{ backgroundColor: ' #e03030',color:"#fafafa" }}>
                           <CardContent>
                              <Typography variant='h3' className='card_content_h3'>
                                 My Vision
                              </Typography>
                           </CardContent>
                           <CardContent>
                              <Typography variant='body1' className='card_content_body1' style={{ lineHeight: '29px' }}>
                                 <p>
                                    To work on various innovative projects which will bestow creative minds thinking patterns to the upcoming
                                    future engineer/scientist so that our mind can boost enough so that we can face any hurdles in the way of
                                    learning new tactics to deal with ever changing or dynamic technology.
                                 </p>
                              </Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                     <Grid item lg={6} md={6} sm={12}>
                        <Card style={{ backgroundColor: '#33a351',color:"#fafafa" }}>
                           <CardContent>
                              <Typography variant='h3' className='card_content_h3'>
                                 My Mission
                              </Typography>
                           </CardContent>
                           <CardContent>
                              <Typography variant='body1' style={{ lineHeight: '29px' }}>
                                 <p>
                                    To develop a platform where the technical innovativeness of students could be nurtured and given a
                                    practical shape so as to improve the technical abilities of students as well as the reputation of institute as
                                    a leader in innovation and creativity.
                                 </p>

                              </Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                  </Grid>
               </div>
            </div>
            <br />
            <br />
         </Container>
      );
      export default Aboutus;
##### 

