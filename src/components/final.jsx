import React, { Component } from "react";
import UncontrolledLottie from './UncontrolledLottie';




class ThankYou extends Component {
	

	state = {
		username: "",
	};
 
	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (
			
			
			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving on Your <b>Medicare</b> Insurance</h1>
				<br></br>

				<div className='card shadow-lg' style={{ borderRadius: '25px' }}>				
				<div className='d-flex'>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<div id="mediaalpha_placeholder">
</div>

					</div>
				</div>
			</div>
               

            </div>
		);
	}
}

export default ThankYou;
