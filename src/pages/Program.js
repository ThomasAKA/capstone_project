import React, { Component} from 'react';
import { Media,Card ,CardImg, CardText, CardBody,FormGroup,Input,Label,
    CardTitle, CardSubtitle, Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../assets/css/bootstrap.css';
import Calendar from 'react-calendar' 
import {axiosinstance} from '../axios'
import { Link } from 'react-router-dom';
import GLOBAL from '../Global'

const token = localStorage.getItem('token');

class Program extends Component{
    constructor(props){
        super(props)
        this.state={
            events : [],
            modalOpen: false,
            event:"",
            time:"",
            user:6
        }
        
    }

    //toggle Modal
toggle = () => this.setState({modalOpen:!this.state.modalOpen});   


//handle input change
handleChange= (event)=>{
    const  {name,value} = event.target
    this.setState({
      [name]:value,
        })
  }


    componentDidMount() {
        axiosinstance.get("/events/")
        .then( (response) =>{
            console.log(response.data)

        this.setState(
            {
                events:response.data
            }
        )
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(this.state.events)
      }
   
  bookEvent = (event,time,user)=> axiosinstance.post("/eventbookings/",{event,time,user})
      .then( (response) =>{
          console.log(response.data)
        alert('Event Booked Successfuly')
      })
      .catch(function (error) {
          alert(error.response.data.non_field_errors.toString())
        console.log(error.response.data.non_field_errors.toString());
      });



    render(){
        var imgStyle={
            width:"170px",
            height :"170px",
        }

        const program = this.state.events.map((event,index) =>{
        return(
            
                <Media key = {index} tag ="ul" style={{marginBottom :"1.5rem"}}>
                    <Media left className="hover" >
                     <Media object  align ="left" style={imgStyle} src={event.image} />
                    </Media>
                    <Media body className="pl-4">
                        <Media heading>{event.title}</Media>
                        <p className="limit">{event.description}</p>
                        <p className="limit">Speaker : {event.speaker}</p>
                        <p className="limit">Location : {event.location}</p>
                        <p className="limit">Time : {event.event_time}</p>
                     
                        {GLOBAL.appState.state.isloggedIn==='true' ?  <button onClick={()=>{
                            this.setState({
                              event:event.id,
                              time:event.event_time  
                            })
                            this.toggle()
                    }}>Book Event</button> :
                      <Link to="/login"> <button>Log In to Book</button> </Link>
                        }
                    </Media>
                    
              </Media>
        
        );
        });

       


        const topEvents = this.state.events.map((event,index) =>{
            return(
                 
                   
                <div key={index} className="m-2">

                   <Card>
                        <CardImg top style={{height :"150px"}} src={event.image} alt=" image" />
                        <CardBody>
                        <CardTitle>{event.title}</CardTitle>
                        <CardSubtitle>20th March</CardSubtitle>
                        <CardText>{event.description}</CardText>
                        <button>See More</button>
                        </CardBody>
                    </Card>
            </div>
            
            );
            });


            const {event,time,user}=this.state

        return(
            <>
                <div className="row mr-0">
                    <div className="col-md-9">
                    <Media list>
                        <h3 className="m-4">Events</h3>
                        {program
                    }</Media>
                    </div>
                    <div className="col-md-3 ">
                        <div className="mt-4">
                        <Calendar />
                        </div>
                        <h3 className="m-4"> Top Events</h3>
                        {topEvents}
                    </div>
                   
                </div>

<div>


    {/* booking modal */}
<Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
  <ModalHeader toggle={this.toggle}>Book Event</ModalHeader>
  <ModalBody>
 <p>Click book to confirm</p>
  </ModalBody>
  <ModalFooter>
    <button className=" btn-primaryary" onClick={()=>this.bookEvent(event,time,user)}>Book</button>{' '}
    <button className="btn-danger" onClick={this.toggle}>Cancel</button>
  </ModalFooter>
</Modal>
</div>
</>
        )
    }

}

export default Program;