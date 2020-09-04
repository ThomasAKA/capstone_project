import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            username: '',
            // firstName: '',
            // lastName: '',
            // confirmPassword: '',
            hasAgreed: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value,
          
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    
  }
    componentDidMount(){
    axios.post("http://127.0.0.1:8000/api/register/")
    .then(response =>{
      console.log(response);
      if(response.status === 200){
        console.log("SignUp successful");
      }
      else{
        console.log(response)
      };
    })
    .catch(error => {
      console.log(error);
      
    });
  }
  


    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">username</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="FormField__Input" placeholder="Enter your last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div> */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Confirm your password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
              </div> */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
              {/* <div class="social-container">
                <h3>SignUp with your Social media platform</h3>
                <a 
                   className="facebook social">
                   <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                   className="instagram social">
                   <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div> */}
            </form>
          </div>
        );
    }
}

export default SignUp;