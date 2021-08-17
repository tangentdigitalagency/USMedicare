import { Button, Card, Col, Collapse, Layout, Row, Typography, Form,  Input } from 'antd';
import Grid from '@material-ui/core/Grid';

import logo from './Assets/usmq.png';
import aet from './Assets/aet.png';
import humana from './Assets/humana.png';
import kra from './Assets/kra.png';
import uhs from './Assets/uhs.png';

import heroImg from './Assets/couple.png';
// import aig from './Assets/aig.png';
import all from './Assets/all.png'; 

import connectImg from './Assets/img/connection.png';
import whatImg from './Assets/img/car.jpeg';
import quote from './Assets/img/quote.png';
import canvas from './Assets/img/canvas.png';
import minutes from './Assets/img/2minutes.png';
import best from './Assets/img/best.png';
import budget from './Assets/img/budget.png';
import { ReactComponent as YourSvg } from './Assets/img/svg_2.svg';
import { ArrowRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"; 

import React from 'react';

function LandingPage(props) {
	const history = useHistory();
	const { Header, Footer, Content } = Layout;
	const { Panel } = Collapse;
	console.log(props);
	return (
		<div className='landing-page'>
			<Layout>
				<Header>
					<Row>
						<Col xs={{ span: 24 }} lg={{ span: 12 }}>
							<a>
								<img src={logo} width='181' alt='logo' />
							</a>
						</Col>
						<Col xs={{ span: 24 }} lg={{ span: 12 }} className='text-right'>
							<Button className="callButton">
								<a href="">
									Call For A Free Quote
								</a>
							</Button>
						</Col>
					</Row>
				</Header>
				<Content>
				<Content>
                        <div className="container3 ">
                            
                        <div className="inputField">
                        <div className='text'>
                                <h1 className='lPHeading text-center'>
                                Compare Multiple Medicare Insurance Quotes 
                                </h1>

                                <p className="pText"> Explore your health options beyond the Medicare Part A and Part B offered by the government. Select a personalized healthcare plan that is a perfect fit for you and the family. Get a Medicare quote today and lower your overall medical costs. </p>
                            </div>
                            <div className="input">
                            <Input className="inputArea" autoFocus={true} placeholder="Enter Your Zipcode">
                            
                            </Input>
<Link to="/step2">

                            <Button htmlType="button" className="button">
                                Get My Free Quote
                            </Button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </Content>
					<section className='section-two'>
						<div className='section-two-container'>
							<Row>
								<Col span={24}>
									<p className='cl01_title'>
										We are partnered with top rated companies
										<br />
									</p>
								</Col>
							</Row>
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
						</div>
					</section>
					<section className='container'>
						<Row>
							<Col span={24}>
								<h1 className='font-weight-bold ml-md-5'>What is medicare?</h1>
							</Col>
						</Row>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<p>
								Medicare is a government program that provides individuals 65 years or older healthcare coverage at a small cost. Original Medicare coverage is broken into two parts—Part A and Part B—and is accepted by nearly every doctor and hospital in the country. Medicare Part A covers inpatient or hospital stays while Part B covers outpatient or medical care. 


								</p>
								<p>Together, Part A and B cover about 80% of the typical healthcare costs seniors face—leaving a few significant gaps in coverage. Medicare Supplement (Medigap) plans are supplemental policies designed to help extend coverage, lessen costs, and ultimately give beneficiaries peace of mind at all times.  Explore Medicare plans with US Medicare! 

</p>
								<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step2');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
													Start Your Free Quote <ArrowRightOutlined />
												</Button>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<div className='service-main-image business'></div>
							</Col>
						</Row>
					</section>
					
					<section className='container my-5'>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 8 }}>
								<div className='container d-flex h-100'>
									<div className='justify-content-center align-self-center'>
										<h1>Why Us?</h1>
										
										<Row className='mt-1 '>
											<Col span={24}>
											<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step2');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
													Start Free Quote <ArrowRightOutlined />
												</Button>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 16 }}>
								<Row>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={budget} />}>
											<Meta title='Affordable Prices' description='no matter your budget we can find the policy right for you and your family.' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={minutes} />}>
											<Meta title='No Waiting Period' description='Full Coverage The First Day' />
										</Card>
									</Col>
								</Row>
								<Row className='mt-3'>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={best} />}>
											<Meta title='No Medical Exam' description='Simple Application - Free Quote—Apply in Minutes' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<YourSvg />}>
											<Meta title='You have options' description='Getting a quote across multiple insurance companies empowers you to know what works best for you.' />
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
					
					
					<section className='container mt-md-5'>
						<Row>
							<Col span={24} className='text-center'>
								<h1>What people say about us</h1>
							</Col>
						</Row>
						<Row className='mt-md-5'>
							{/* <Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<img
									src={whatImg}
									width='723'
									sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 723px'
									srcSet='https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-500.jpeg 500w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1080.jpeg 1080w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1600.jpeg 1600w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%20(1).jpg 2000w'
									alt=''
									className='client-image-big w-100 rounded'
								/>
							</Col> */}
							{/* <Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}> */}
								<img src={quote} alt='quote' width='21' className='quote' />
								<p className='quote-text-v1'>
									<em className='font-italic italic-text-4'>
									“I have never had such a great experience getting insurance quotes than I had using US Medicare Quotes.  Their form is super quick and simple.  As soon as I hit submit, they matched me with a great insurance agent named Sandy.  I had all the information and quotes I had to make the decision to switch my insurance.  Thank you US Medicare Quotes for the great connection!" <br/>
									</em>
								</p>
								
								<Row className='mt-1'>
									<Col span={24}>
									<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step2');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
												Start Your Free Quote <ArrowRightOutlined />
												</Button>
									</Col>
								</Row>
							{/* </Col> */}
						</Row>
					</section>

					<section className='trusted-companies pt-4'>
						<div className='container'>
							<Row className='py-5'>
								<Col span={24}>
									<h3 className='mx-auto text-center'>
										Trusted by some of leading <br />
										companies in the world
									</h3>
								</Col>
							</Row>

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

							<Row>			
							</Row>
						</div>
					</section>
				</Content>
				<Footer className='footer'>
					<div className='footer-container'>
						<div className='div-block-58'>
					
						<Grid container xs={12} align='left' style={{ justifyContent: 'left' }}>
		
						<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
						<Grid item lg={3} xs={12} style={{ alignSelf: 'flex-end' }}>
							<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>2021 US Medicare Quotes</Typography>
							<Typography style={{fontSize: '12px', color: 'rgb(166, 166, 166)' }}>Powered By Quotehound</Typography>
						</Grid>
						<Grid item lg={6} xs={false} />
						<Grid container lg={3} xs={12}>
							
						<Grid item lg={4} xs={12} style={{ alignSelf: 'center' }}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://www.quotehound.com/dont-sell-my-info'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
											Do Not Sell
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center'}}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://quotehound.com/privacy-policy'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Privacy Policy
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center'}}>
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
					</div>
				</Footer>
			</Layout>
		</div>
	);
}

export default LandingPage;
