import React, {Component} from 'react';
import {axiosinstance} from '../axios'
import{ Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            username: '',
            first_name: '',
            last_name: '',
            password2: '',
            terms: false
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
        const data ={
         "username":this.state.username,
          "password":this.state.password,
          "password2" :this.state.password2,
          "email":this.state.email,
          "first_name":this.state.first_name,
          "last_name":this.state.last_name,
          "terms":this.state.terms,
        }
        const {password, password2} =this.state;
        if (password !== password2){
          alert("Passwords dont match");
        } else{
          axiosinstance.post("/register/", data)

       .then(response =>{
        console.log(response);
        if(response.status === 200){
          alert("Registration Successful")
          this.props.history.push("/login")        }
        else{
        console.log(response)
        };
      })
      .catch(error => {
        console.log(error);
      
    });
  }
  
}


    render() {
        return (
    <div className="App">
      <div className="App__Form">
        <div className="FormCenter">
          <h2><center>Sign Up</center></h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">first Name</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">last Name</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" className="FormField__Input" placeholder="Enter your last name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
              </div> */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Password">Password</label>
                <input type="password" id="Password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Password2">Confirm Password</label>
                <input type="password" id="Password2" className="FormField__Input" placeholder="Confirm your password" name="password2" value={this.state.password2} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Confirm your password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
              </div> */}
        

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="terms" value={this.state.terms} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20">Sign Up</button> 
                  {/* <Link to="/sign-in" className="FormField__Link">I'm already member</Link> */}
              </div>
              <Link to="/login" className="FormField__Link">Already Signed up ? Click here</Link> 
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
        </div>
      </div>

        );
    }
}

export default withRouter(SignUp);