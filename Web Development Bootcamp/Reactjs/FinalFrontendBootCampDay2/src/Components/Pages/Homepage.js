
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
