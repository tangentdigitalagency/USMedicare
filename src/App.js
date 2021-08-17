import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import Grid from '@material-ui/core/Grid';
// @ts-ignore
import Logo from './Assets/usmq.png';
// @ts-ignore
import { Button, Typography, Progress, Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import tran from './Assets/tran.png'


import DesiredCoverage from './components/over65';
import PartAorB from './components/partab';
import Gender from './components/gender';
import Birth from './components/birth';
import Living from './components/living';
import Info from './components/info';
import ThankYou from './components/final.jsx';
import LandingPage from './LandingPage';
import Landing from './landing';

import aet from './Assets/aet.png';
import humana from './Assets/humana.png';
import kra from './Assets/kra.png';
import uhs from './Assets/uhs.png';

class App extends Component {
	state = {
		route: '/',
		routes: ['/step1', '/step2', '/step3', '/step4', '/step5', '/step6', '/thank-you'],
		postData: {
			//extra entries
			lp_campaign_id: '610208246d0ec',
			lp_campaign_key: 'Yy4MHdVc3ZKWp6q7RXxg',
			lp_s1: '12',
			lp_s2: '13',
			landing_Page: 'usmedicarequotes.com',
			TCPA_Consent: 'Yes',
			TCPA_Language:
				'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			IP_Address: '',
			user_agent: navigator.userAgent,
			//s1 form fields
			are_you_over_or_under_65_years_of_age: '',
			are_you_currently_enrolled_in_both_medicare_part_a_part_b: '',
			//S2 form fields
			gender: '',
			dob: '',
			address: '',
			city: '',
			state: '',
			zip_code: '',
			first_name: '',
			last_name: '',
			email_address	: '',
			phone_home: ''
		},
	};

	callMediaAlpha = () => {

		var tempArray = {
       zip: this.state.zip_code,
}

		window.MediaAlphaExchange = {    
			"data": {       
				  "zip": tempArray.zip,   
			  },   
			"placement_id": "1J4sG3mXXl-_x6fzSCTcXyOcLeiAIg",    
			"sub_1": "test sub id",    
			 "type": "ad_unit",   
			   "version": 17 }; 
	  
	  window.MediaAlphaExchange__load('mediaalpha_placeholder'); 
		
	   }


	  UNSAFE_componentWillUpdate  = () => {
		console.log(this.state.postData);
	  };

	  

	copyValuesToPostData2 = () => {
		var tempArray = {
			zip: this.state.postData.zip_code,
		};
		this.setState({ postData2: tempArray });
		// var MediaAlphaExchange = { 
		// 	"data": {
		// 	   "zip": "",
		// 	},
		// 	"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",
		// 	"sub_1": "test sub id",
		// 	"type": "ad_unit",
		// 	"version": 17
		//  };
		 console.log("SetMA");
//MediaAlphaExchange__load('mediaalpha_placeholder');
		return this.state.postData2;
	};
	// componentDidMount() {
	// 	if (this.state.first_name === '' || this.state.last_name === '') {
	// 		this.props.history.push('/calculate');
	// 	}
	// 	if (window.location.pathname !== '/') {
	// 		this.setState({ route: '' });
	// 	}
	// 	console.log(this.state);
	// 	window.addEventListener('popstate', (event) => {
	// 		console.log(event);
	// 		if (window.location.pathname === '/') {
	// 			this.props.history.push('/');
	// 			this.setState({ route: '/' });
	// 		}
	// 	});
	// }



	changeRoute = () => {
		this.setState({
			route: '',
		});
	};

	render() {
		// console.log(this.props);
		return this.state.route === '/' && this.state.routes.indexOf(window.location.pathname) === -1 ? (
			<Route exact path='/' render={(props) => <LandingPage changeRoute={this.changeRoute} {...props} />} />
		) : (
			<div
				className='container-fluid'
				style={{
					backgroundColor: '#f7f7f7',
					overflow: 'hidden',
				}}>
				<header className='navbar navbar-expand flex-column flex-md-row bd-navbar'>
					<div className='container'>
						<img
							// @ts-ignore
							src={require('./Assets/usmq.png')}
							className='logo'
														alt=''
						/>
						
						<ul className='nav nav-fill'>
							<li className='nav-item'>
							{/* <b className='nav-item' style={{padding: "10px"}}>Speak To An Agent</b>  */}

								<Button
									type='primary'
									size='middle'
									icon={
										<PhoneOutlined
											// @ts-ignore
											rotate='90'
										/>
									}
									href={'tel:+18885671448'}>
									888-567-1448
								</Button>
							</li>
						</ul>
					</div>
				</header>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Switch>
								{/* <Route exact path='/step1'>
									<DesiredCoverage
										props={this.props}
										over_65={this.state.postData.are_you_over_or_under_65_years_of_age}
										over_65={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													jornaya_lead_id: document.getElementById('leadid_token').value, 
													trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value ,
													are_you_over_or_under_65_years_of_age: v,
												},
											});
										}}
									/>
								</Route> */}

								<Route exact path='/step2'> 
										<PartAorB 
											// props={this.props}
											// part={this.state.postData.are_you_currently_enrolled_in_both_medicare_part_a_part_b}
											// part={(v) => {
											// 	this.setState({
											// 		postData: {
											// 			...this.state.postData, 
											// 			jornaya_lead_id: document.getElementById('leadid_token').value, 
											// 		trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value ,
											// 			are_you_currently_enrolled_in_both_medicare_part_a_part_b: v,
											// 		},
											// 	});
											// }}

											

										/>
								</Route>

								<Route path='/step3'>
									<Gender
										chooseGender={this.state.postData.gender}
										chooseGender={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													gender: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step4'>
									<Birth
										
										setBirth={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													dob: v
												},
											});
										}}
									/>
								</Route>
								<Route path='/step5'>

									<Living
										address={this.state.postData.address}
										city={this.state.postData.city}
										zip_code={this.state.postData.zip_code}
										state={this.state.postData.state}
										setAddress={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													address: v,
												},
											});
										}}
										setCity={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													city: v,
												},
											});
										}}
										
										setState={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													state: v,
												}
											});
										}}

										setZip={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													zip_code: v,
												}
											});
										}}

									/>
								</Route>
								<Route path='/step6'>
									<Info 
										first_name={this.state.postData.first_name}
										last_name={this.state.postData.last_name}
										email={this.state.postData.email_address}
										phone={this.state.postData.phone_home}

										callMediaAlpha={this.callMediaAlpha}


										setFName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													first_name: v,
												},
											});
										}}
										setLName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													last_name: v,
												},
											});
										}}
										setEmail={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													email_address: v,
												},
											});
										}}
										setPhone={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													phone_home: v,
												},
											});
										}}
										postData={this.state.postData}

									/>
								</Route>
								
								<Route path='/thank-you'>
									<ThankYou 
									postData2={this.state.postData} 
									/>
									
								</Route>
							</Switch>

							{/* </StepWizard> */}
						</div>
					</div>
				</div>

				

				<Grid container xs={12} align='center' style={{ justifyContent: 'center', paddingTop: '20px'}}>
					<Grid container xs={8} style={{ justifyContent: 'center' }}>
						<Grid item xs={12}>
							<Typography style={{ fontWeight: 700, lineHeight: 1.5, paddingBottom: '25px',}}>Providers Include:</Typography>
							<div className='section-two-imgs '>
							<Row gutter={16}>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6} className="column">
									<img src={aet} className="logoSize" />
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={humana} className="logoSize"/>
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={kra} className="logoSize" />
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={uhs} className="logoSize aig"/>
								</Col>

							</Row>

							
							</div>

						</Grid>

					</Grid>
					<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
						<Grid item lg={3} xs={12} style={{ alignSelf: 'flex-end' }}>
							<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>2021 US Medicare Quotes</Typography>
							<Typography style={{fontSize: '12px', color: 'rgb(166, 166, 166)' }}>Powered By Quotehound</Typography>
						</Grid>
						<Grid item lg={6} xs={false} />
						<Grid container lg={3} xs={12}>
							
						<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://www.quotehound.com/dont-sell-my-info'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
											Do Not Sell
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://quotehound.com/privacy-policy'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Privacy Policy
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography
									style={{
										fontSize: '15px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/terms-conditions'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Terms & Conditions
									</a>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(App);
