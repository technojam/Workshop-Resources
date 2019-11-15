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
	marginRight:"auto"
	
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
