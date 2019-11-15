![Image of Inital Project](https://tj-static.s3.ap-south-1.amazonaws.com/initalProject.png)![Image of Final Project](https://tj-static.s3.ap-south-1.amazonaws.com/finalProject.png)



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
##### Lets Create a Blog Page

            import React, { Component } from "react";


            //material ui component
            import Card from '@material-ui/core/Card';
            import CardMedia from '@material-ui/core/CardMedia';
            import CardContent from '@material-ui/core/CardContent';
            import Typography from '@material-ui/core/Typography';
            import { Grid } from "@material-ui/core";
            import Container from '@material-ui/core/Container';



            class Blogs extends Component {

                constructor(props) {
                    super(props);
                    //Until backend add data here cards will be created automatically.
                    this.state = {
                        achie: [

                            {
                                id: 1,
                                title: "Nasa space Challenge",
                                by: "Technojam",
                                date: "Spetember 15, 2019",
                                Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                                Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/spaceapps.jpg",



                            },

                            {
                                id: 2,
                                title: "BootCamp",
                                by: "Ravi",
                                date: "26 August, 2019",
                                Description: "insta lucipher._ hate life coz of breakup.meet me in after life. fav song hellfire",
                                Image:  "https://tj-static.s3.ap-south-1.amazonaws.com/DSC_2591.JPG",

                            },

                        ]
                    }
                }

                render() {



                    const achie = this.state.achie;

                    console.log(achie);
                    return (


                        <Container maxWidth="lg">
                            <div style={{ marginTop: "30px", marginBottom: "20px", }}>
                                <div >
                                <h2 style={{color:"#23292e",textAlign:"center"}}>
                                        Blogs  
                                        </h2>
                                    <hr style={{
                                        maxWidth: "120px",
                                        borderWidth: "1px",
                                        opacity: "1",
                                        marginTop: "25px",
                                        marginBottom: "25px",
                                        borderColor: "#23292e"
                                    }}>

                                    </hr>
                                    <br></br>

                                    <Grid container
                                        spacing={3}
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                      >

                                        {achie.map(achie => (

                                                <Grid item xs={12} sm={3} md={4}>
                                                            <Card style={{
                                                                maxHeight: "410px", minHeight: "410px",
                                                                boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                                borderRadius: "20px",

                                                            }}>

                                                                <CardMedia>

                                                                    <img src={achie.Image} width="100%" height="auto" />

                                                                </CardMedia>

                                                                <CardContent>
                                                                    <Typography variant="h5"  component="p" style={{fontFamily:"Linotte"}}>
                                                                        {achie.title}
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardContent style={{marginTop:"-20px"}}>
                                                                    <Typography variant="body2" color="textSecondary" component="p" >
                                                                        {achie.Description}
                                                                    </Typography>
                                                                    </CardContent>


                                                            </Card>
                                                </Grid>

                                        ))}

                                    </Grid>
                                </div>


                            </div>
                        </Container>
                    );
                }
            }


            export default Blogs;
            
  #### lets create Contact us Form

       import React, { useState, useContext } from 'react';

      //material ui component
      import Container from '@material-ui/core/Container';
      import {
            Typography,
            Hidden,
            Grid,
            Button,
            CardContent
      } from '@material-ui/core';
      import Card from '@material-ui/core/Card';
      import { FormGroup } from '@material-ui/core';
      import Divider from '@material-ui/core/Divider';


      import SendIcon from '@material-ui/icons/Send';

      const sectionStyle = {
            width: '100%',

            backgroundRepeat: 'no-repeat',
            marginTop: '100px',
            backgroundPositionX: 'center',
            marginLeft:"300px",

      };
      const style = {
            form: {
                  padding: '20px',
                  text: {
                        appearance: 'none',
                        width: '100%',

                        height: '35px',

                        borderRadius: '5px',
                        outline: 'none',
                        border: 'none',
                        background: '#e8ebed',
                        color: '#576366',
                        fontSize: '14px'
                  }
            }
      };

      const Contactus = () => {


            const [details, setDetails] = useState({
                  Firstname: '',
                  Lastname: '',
                  Email: '',
                  Mobile: '',
                  Reason: ''
            });


            const handleChange = e => {
                  setDetails({
                        ...details,
                        [e.target.name]: e.target.value
                  });
            };

            return (
                  <Container maxWidth='lg'>
                        
                        <div style={sectionStyle}>
                              <Grid
                                    container
                                    direction='row'
                                    justify='flex-start'
                                    alignItems='flex-start'
                                    spacing={6}
                              >
                                    <Grid direction='row' xs={12} sm={12} md={6} style={{padding:"20px"}}>
                                          <Card
                                                className='card--shadow'
                                                style={{ borderRadius: '10px', }}
                                          >
                                                <div style={{ backgroundColor: '#24292E' }}>
                                                      <br />
                                                      <CardContent>
                                                            <Hidden smUp>
                                                                  <Typography
                                                                        variant='h4'
                                                                        className='contact_section_heading'
                                                                  >
                                                                        Get in touch
                                                                  </Typography>
                                                            </Hidden>

                                                            <Hidden mdDown>
                                                                  <Typography
                                                                        variant='h3'
                                       className='contact_section_heading'
                                       style={{color:"#fafafa",textAlign:"Center"}}
                                                                  >
                                                                        Get in touch
                                                                  </Typography>
                                                            </Hidden>
                                                      </CardContent>
                                                </div>
                                                <Divider />
                                                <br />
                                                <div style={style.form}>
                                                      <form autoComplete='on'>
                                                            <Grid container spacing={3}>
                                                                  <Grid item xs={12}>

                                                                  </Grid>
                                                                  <Grid item xs={6}>
                                                                        <FormGroup>
                                                                              <label>First-Name</label>
                                                                              <input
                                                                                    style={style.form.text}
                                                                                    type='text'
                                                                                    name='FirstName'

                                                                                    onChange={handleChange}
                                                                              />
                                                                        </FormGroup>
                                                                  </Grid>
                                                                  <Grid item xs={6}>
                                                                        <FormGroup>
                                                                              <label>Last-Name</label>
                                                                              <input
                                                                                    style={style.form.text}
                                                                                    type='text'
                                                                                    name='LastName'

                                                                                    onChange={handleChange}
                                                                              />
                                                                        </FormGroup>
                                                                  </Grid>
                                                            </Grid>
                                                            <FormGroup>
                                                                  <label>Email</label>
                                                                  <input
                                                                        style={style.form.text}
                                                                        type='email'
                                                                        name='Email'

                                                                        onChange={handleChange}
                                                                  />
                                                            </FormGroup>
                                                            <FormGroup>
                                                                  <label>Contact Number</label>
                                                                  <input
                                                                        style={style.form.text}
                                                                        type='tel'
                                                                        name='Mobile'

                                                                        onChange={handleChange}
                                                                  />
                                                            </FormGroup>
                                                            <FormGroup>
                                                                  <label>Query</label>
                                                                  <input
                                                                        style={style.form.text}
                                                                        type='textarea'
                                                                        name='Reason'

                                                                        onChange={handleChange}
                                                                  />
                                                            </FormGroup>
                                                            <br />
                                                            <Typography  style={{textAlign:"center"}}>
                                                                  <Button
                                                                        variant='contained'
                                                                        color="secondary"

                                                                        style={{alignContent:"Center",justifyContent:"center",alignItems:"center"}}
                                                                        endIcon={<SendIcon />}
                                                                  >
                                                                        Submit
                                                                  </Button>
                                                            </Typography>
                                                      </form>
                                                </div>
                                          </Card>
                                    </Grid>

                              </Grid>
                              <br />
                        </div>
                  </Container>
            );
      };
      export default Contactus;

#### lastly our beloved HomePage

      import React, { Component, Fragment } from "react";


      //material ui component
      import Card from '@material-ui/core/Card';
      import CardMedia from '@material-ui/core/CardMedia';
      import CardContent from '@material-ui/core/CardContent';
      import Typography from '@material-ui/core/Typography';
      import { Grid, Divider } from "@material-ui/core";
      import Container from '@material-ui/core/Container';
      import Table from '@material-ui/core/Table';
      import TableBody from '@material-ui/core/TableBody';
      import TableCell from '@material-ui/core/TableCell';
      import TableHead from '@material-ui/core/TableHead';
      import TableRow from '@material-ui/core/TableRow';

      function createData(name, rating, project) {
          return { name, rating, project };
      }
      const rows = [
          createData('HTML & CSS', 6, 6.0),
          createData('JavaScript & jQuerry', 8, 9.0),
          createData('React', 7, 16.0),
          createData('Node', 4, 3),
          createData('MongoDb', 3, 16.0),
      ];

      const proj = [
          {
              id: 1,
              title: "FrontendBootCampDay2",
              Description: "Developed a project on mern stack only with front end. learnd hooks, json, routing etc",
              Projectlink: "https://github.com/technojam/Workshop-Resources/tree/master/Web%20Development%20Bootcamp/Reactjs/FrontendBootCampDay2"
          },
          {
              id: 2,
              title: "HotelBootCampDay2",
              Description: "Developed a project on mern stack only with front end. learnd hooks, json, redux, etc",
              Projectlink: "https://github.com/technojam/Workshop-Resources/tree/master/Web%20Development%20Bootcamp/Reactjs/HotelBootCampDay2"
          },
          {
              id: 3,
              title: "RecipeBootCampDay2",
              Description: "Developed a project on React only. learnd how to write normal css in react and build without framework",
              Projectlink: "https://github.com/technojam/Workshop-Resources/tree/master/Web%20Development%20Bootcamp/Reactjs/RecipeBootCampDay2"
          },
          {
              id: 4,
              title: "TechnojamFrontend",
              Description: "Developed a case study on project in mern stack learnd hooks json, redux, Node etc",
              Projectlink: "https://github.com/technojam/technojam-frontend"
          },
      ]

      class Home extends Component {

          constructor(props) {
              super(props);
              //Until backend add data here cards will be created automatically.
              this.state = {
                  achie: [

                      {
                          id: 1,
                          title: "Ravi",
                          by: "Ravi",
                          date: "26 August, 2019",
                          Description: "insta lucipher._ hate life coz of breakup.meet me in after life. fav song hellfire",
                          Image: "https://tj-static.s3.ap-south-1.amazonaws.com/DSC_2591.JPG",

                      },

                  ],

              }
          }

          render() {



              const achie = this.state.achie;

              console.log(achie);
              return (


                  <Container maxWidth="lg">
                      <div style={{ marginTop: "30px", marginBottom: "20px", }}>
                          <div >

                              <br></br>

                              <Grid container
                                  spacing={3}
                                  direction="row"
                                  justify="flex-start"
                                  alignItems="flex-start"
                              >

                                  {achie.map(achie => (
                                      <Fragment>
                                          <Grid item xs={12} sm={3} md={4}>
                                              <Card style={{
                                                  maxHeight: "410px", minHeight: "410px",
                                                  boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                  borderRadius: "20px",

                                              }}>

                                                  <CardMedia>

                                                      <img src={achie.Image} width="100%" height="auto" />

                                                  </CardMedia>

                                                  <CardContent>
                                                      <Typography variant="h5" component="p" style={{ fontFamily: "Linotte" }}>
                                                          {achie.title}
                                                      </Typography>
                                                  </CardContent>
                                                  <CardContent style={{ marginTop: "-20px" }}>
                                                      <Typography variant="body2" color="textSecondary" component="p" >
                                                          {achie.Description}
                                                      </Typography>
                                                  </CardContent>


                                              </Card>

                                          </Grid>
                                          <Grid item xs={12} sm={3} md={8}>
                                              <Card style={{
                                                  maxHeight: "410px", minHeight: "410px", minWidth: "500px",
                                                  boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                  borderRadius: "20px",

                                              }}>

                                                  <CardContent>
                                                      <Typography variant="h5" component="p" style={{ fontFamily: "Linotte" }}>
                                                          Check my Self Rating
                                                      </Typography>
                                                  </CardContent>
                                                  <CardContent style={{ marginTop: "-20px" }}>
                                                      <Typography variant="body2" color="textSecondary" component="p"  >
                                                          <Table aria-label="simple table">
                                                              <TableHead style={{ backgroundColor: "#29232e", color: "#fafafa" }}>
                                                                  <TableRow >
                                                                      <TableCell style={{ color: "#fafafa" }}>Languages</TableCell>
                                                                      <TableCell align="right" style={{ color: "#fafafa" }}>Rating</TableCell>

                                                                      <TableCell align="right" style={{ color: "#fafafa" }}>Projects&nbsp;(s)</TableCell>
                                                                  </TableRow>
                                                              </TableHead>
                                                              <TableBody>
                                                                  {rows.map(row => (
                                                                      <TableRow key={row.name}>
                                                                          <TableCell component="th" scope="row">
                                                                              {row.name}
                                                                          </TableCell>
                                                                          <TableCell align="right">{row.rating}</TableCell>
                                                                          <TableCell align="right">{row.project}</TableCell>
                                                                      </TableRow>
                                                                  ))}
                                                              </TableBody>
                                                          </Table>
                                                      </Typography>
                                                  </CardContent>


                                              </Card>

                                          </Grid>

                                      </Fragment>
                                  ))}

                              </Grid>
                          </div>
                          <br></br>
                          <Divider />
                          <div >

                              <br></br>

                              <Grid container
                                  spacing={3}
                                  direction="row"
                                  justify="flex-start"
                                  alignItems="flex-start"
                              >

                                  {proj.map(proj => (
                                      <Fragment>
                                          <Grid item xs={12} sm={3} md={3}>
                                              <Card style={{

                                                  boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                  borderRadius: "20px",

                                              }}>


                                                  <CardContent>
                                                      <Typography variant="h5" component="p" style={{ fontFamily: "Linotte" }}>
                                                          {proj.title}
                                                      </Typography>
                                                  </CardContent>
                                                  <CardContent style={{ marginTop: "-20px" }}>
                                                      <Typography variant="body2" color="textSecondary" component="p" >
                                                          {proj.Description}
                                                      </Typography>
                                                  </CardContent>
                                                  <CardContent style={{ marginTop: "-20px" }}>
                                                      <Typography variant="body2" color="textSecondary" component="p" >
                                                          <a

                                                              href="#"
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                          >

                                                              <i
                                                                  className="fa fa-linkedin fa-2x"
                                                                  style={{ color: "#0077b5", padding: "8px", marginRight: "2px" }}
                                                              ></i>

                                                          </a>
                                                          <a

                                                              href={proj.Projectlink}
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                          >

                                                              <i
                                                                  className="fa fa-github fa-2x"
                                                                  style={{ color: "#23292e", padding: "2px" }}
                                                              ></i>

                                                          </a>
                                                      </Typography>
                                                  </CardContent>


                                              </Card>

                                          </Grid>

                                      </Fragment>
                                  ))}

                              </Grid>
                          </div>



                      </div>
                  </Container>
              );
          }
      }


      export default Home;

![Image of Recipe Project](https://tj-static.s3.ap-south-1.amazonaws.com/recipe.png)![Image of Hotel Project](https://tj-static.s3.ap-south-1.amazonaws.com/hotel.png)

