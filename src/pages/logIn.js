import React, { Component } from 'react'
import axios from 'axios'
import{ Link , Redirect} from 'react-router-dom';


export default class LogIn extends Component {

 

constructor(props) {
  super(props)

  this.state = {
     username:"",
     password:""
  }
}


//handle text change

handleChange= (event)=>{
  const  {name,value} = event.target
  this.setState({
    [name]:value,
      })
}

//Submit form action

handleSubmit = (e)=>{
  e.preventDefault()
  const data = {
    "username": this.state.username,
    "password":this.state.password,
  }

  console.log(this.state.username,this.state.password)
  axios.post("http://13.81.46.121:8080/api/login/", data)
  .then(function (response) {
    console.log(response);
    if(response.status === 200){
       console.log("Login successfull");
       }
       else{
         console.log(response.data)
       };
  })
  .catch(function (error) {
    console.log(error);
  });

}


  render() {
    return (

  <div className="App">
      <div className="App__Form" style={{marginTop:100}}>
        <div className="FormCenter">
          <h2><center>Login In</center></h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20">Login</button> 
              </div>
              <Link to="/signup" className="FormField__Link">Not Signed up yet ? Click here</Link> 
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
  
    )


  }
}
