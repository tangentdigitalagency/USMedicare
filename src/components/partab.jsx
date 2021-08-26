import React, { Component } from "react";
import {Form, Button, Input, Progress, Select, Radio} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link} from "react-router-dom"; 
import {Redirect} from "react-router-dom"; 
import {withRouter } from "react-router-dom";
const {Option} = Select;

class PartAOrB extends Component {

  state = {};
 
 nextStep = (ab) => {

  var part = ab.target.dataset.value;

  console.log(ab.target.value)

  this.props.partAOrB(ab.target.dataset.value);

  this.props.history.push("/step3")


 } 
 

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
        <Progress percent={20} status="active" showInfo={true} className="pbar"/>
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
              name="are_you_currently_enrolled_in_both_medicare_part_a_part_b"
              className="mywidth"
              onFinish={this.nextStep}
              initialValues={{
                are_you_currently_enrolled_in_both_medicare_part_a_part_b: this.props.are_you_currently_enrolled_in_both_medicare_part_a_part_b,
              }}
              onFinishFailed={this.onFinishFailed}
            > <h3>Are you currently enrolled in both Medicare Part A & Part B?</h3>
              <br />
              <Form.Item
                name="are_you_currently_enrolled_in_both_medicare_part_a_part_b"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >

<Button size="large" name="are_you_currently_enrolled_in_both_medicare_part_a_part_b" className="chooseButton" id="yes" data-value="yes" value={"yes"} onClick={(ab) => this.nextStep(ab)} >Yes</Button>

        

              
<Button  size="large" name="are_you_currently_enrolled_in_both_medicare_part_a_part_b" className="chooseButton" id="no" value={"no"} data-value="no" onClick={(ab) => this.nextStep(ab)} >No</Button>

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

export default withRouter(PartAOrB) ;
