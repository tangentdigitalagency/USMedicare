import React, { Component } from 'react';
import { Form, Input, Button, Progress, Select } from 'antd';
import CommonComponents from './CommonComponents';
import { Link, withRouter } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
const {Option} = Select;


class Gender extends Component {
	state = {};

	
	onFinish = (gen) => {
	

    var gender = gen.target.dataset.value;

    console.log(gender)
  
    this.props.chooseGender(gen.target.dataset.value)
  
    this.props.history.push("/step4")
  
		// this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


	render() {
		return (
			<div className='card shadow-lg' style={{ borderRadius: '25px' }}>
				<Progress percent={40} status='active' showInfo={true} className='pbar' />
				<CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
				<div className='p-2'>
					<Link to='/step2'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>

				<div className='d-flex'>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="gender"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                gender: this.props.gender,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> What's your gender?</h3>
              <br />
              <Form.Item
                name="gender"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >
                  <Button size="large" name="gender" value={"male"} id="male" data-value="male" className="chooseButton" onClick={(gen) => this.onFinish(gen)}>Male</Button>

<Button size="large" name="gender" id="female" value={"female"} data-value="female" className="chooseButton" onClick={(gen) => this.onFinish(gen)}>Female</Button>
              </Form.Item>
            
              {/* <Link to="/step2">  */}
              <Form.Item>
        
               
                {/* <Button type="primary" htmlType="submit" block size="large" 
                
                // onClick= {() => this.props.history.push("/step2")}
                 
                >
            
                
               Next  
                </Button> */}
              
               
              </Form.Item>
            {/* </Link> */}
            </Form>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Gender);
