import React, { Component } from 'react';
import { Row, Col, Label, Form, Input, FormGroup } from 'reactstrap'

class Main extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var imgStyle={
            width: "100px",
            height :"30px",
        },
        ingStyle = {
            width: "100%",
            height:"600px",
        }
    
        return(
            <div className="icons">
                <div className="logo"><center><img className="sty" style={imgStyle}  src={require("../assets/images/icon3.png")}/></center></div>
                
                <div class="navbar">
                <a className="active" href="#"><i class="fa fa-fw fa-bars"></i> All Events</a>
                     <a href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                      <a href="#"><i class="fa fa-fw fa-calendar"></i> Events</a>
                      <a href="#"><i class="fa fa-fw fa-paperclip"></i> Pages</a>
                     <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact Us</a>
                      <a href="/login"><i class="fa fa-fw fa-user"></i> Login</a>
                      <a href="/signup"><i class="fa fa-fw fa-sign-in"></i> SignUp</a>
                </div>  
                <div className="overlay">
                     <img style={ingStyle}src= {require("../assets/images/Dance5.jpg")} />
                     <div >
                         <div className="centered"><center>EXPLORE THE FUN
                     <p className="paragraph">Discover awesome events around you! And not only you!!</p></center></div>
                     <Form className="fon">
                     <Row form>
        <Col md={2}>
          <FormGroup>
            <Label sm="3"><h6>Event</h6></Label>
            <Input type="text" placeholder="search event"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label sm="3"><h6>When</h6></Label>
            <Input type="date"placeholder="DD/MM/YY"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label sm="11"><h6><center>where</center></h6></Label>
            <Input type="text" placeholder="search a location"/>
          </FormGroup>  
        </Col>
       
        <button class="btn"><center>show me fun!</center></button>
       
      </Row>
     
      </Form>
      </div>
                 </div>
                 <div className="ne"><center>
                     <h3>Upcoming Events</h3>
                    
                     <h6>A mashup of the words “blob” and “architecture,” blobitecture is the name for the architectural style of buildings designed with totally unique, organic forms, often</h6></center>
                    
                 
                 </div>
                 <div>
                 <i  class="fa fa-fw fa-comments fa-4x"></i>
                 <i  class="fa fa-fw fa-desktop fa-3x" ></i>
                 <i  class="fa fa-fw fa-group fa-3x"></i>
                 </div>
            <div>
            <h4 class="abt"><center>About Us</center></h4>
            <p>An award-winning and nationally-recognized event design and production company .this is simply amazing. Whether you are planning a two-day virtual conference, a fundraising gala or the social event of the season, The Event Company will create an unforgettable experience for you and your guests.</p>
            </div>

    </div>
        );


       
    }

    
}

export default Main;