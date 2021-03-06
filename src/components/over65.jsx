import React, { Component } from "react";
import {Form, Button, Input, Progress, Select} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link} from "react-router-dom"; 
import {Redirect} from "react-router-dom"; 
import {withRouter } from "react-router-dom";
const {Option} = Select;

class DesiredCoverage extends Component {
 
  onFinish = (values) => {
    // this.props.nextStep();

  
    this.props.over_65(values.are_you_over_or_under_65_years_of_age);
    console.log("Success:", values);
    this.props.history.push("/step2")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // nextpage =()=>(
  //   // <Redirect to="/step2"/>
  //   this.props.history.push("/step2"),
  //   console.log(`netx page`,this.props)
  // )
  render() {
   
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <Progress percent={10} status="active" showInfo={true} className="pbar"/>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="d-flex">
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="are_you_over_or_under_65_years_of_age"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                are_you_over_or_under_65_years_of_age: this.props.are_you_over_or_under_65_years_of_age,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Are you over or under 65 years of age?</h3>
              <br />
              <Form.Item
                name="are_you_over_or_under_65_years_of_age"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >

                <Button size="large" name="are_you_over_or_under_65_years_of_age" defaultValue="Yes" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>I'm <strong> Over </strong> 65</Button>

                <Button size="large" name="are_you_over_or_under_65_years_of_age" defaultValue="No" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>I'm <strong> Under </strong> 65</Button>
              </Form.Item>
            
              {/* <Link to="/step2">  */}
              <Form.Item>
        
               
                {/* <Button type="primary" htmlType="submit" block size="large"  */}
                
                {/* // onClick= {() => this.props.history.push("/step2")} */}
                 
                {/* >
            
                
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

export default withRouter(DesiredCoverage) ;
