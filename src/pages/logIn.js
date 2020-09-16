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

handlechange= (event)=>{
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

  axios.post("http://127.0.0.1:8000/api/login/", data)
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
    <section className="form">

  <h2>Login</h2>
  
      <form >
      
        <input onChange={this.handlechange} placeholder="Username" type="text" name="username"></input>
      
        <input onChange={this.handlechange} placeholder="Password" type="password" name="password"></input><br></br>

        <button onClick={this.handleSubmit} type="submit"><Link to = "/program">Login</Link></button><br></br>
        <a href="/">Forgot Password ?</a>
        {/* <p style={{textAlign:"center"}}>Or</p> */}<br></br>
        <button id="Signup"><Link to = "/signup">Sign Up</Link></button>
      </form>

</section>
    )


  }
}
