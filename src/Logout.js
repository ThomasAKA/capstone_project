import GLOBAL from '../src/Global'

import axios from 'axios'

const token = localStorage.getItem('token');

const axioslogoutinstance = axios.create({
    baseURL: 'http://13.92.41.24/api/',
     headers: {'Authorization' : `Token ${token}`}
  });


export const handleLogout = (e)=>{
    e.preventDefault()  
    axioslogoutinstance.post("/logout/")
    .then( (response)=> {
      console.log(response);
      if(response.status === 204){
       localStorage.setItem('token',"")
       GLOBAL.appState.setState({isloggedIn:"false"},() => {
        localStorage.setItem('isloggedIn',false)
      })
       this.props.history.push("/")  
     }
        
    })
    .catch(function (error) {
      console.log(error);  
    //  alert(error.toString())
    });
  
  }