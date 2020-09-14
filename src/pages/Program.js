import React, { Component} from 'react';
import { Media,Card ,CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import '../assets/css/bootstrap.css'    


class Program extends Component{
    constructor(props){
        super(props)
        this.state={
            events : [
            {
                title: 'Scrap',
                description:'Creating a beautiful personalized scrapbook has never been easier. In collaboration with Mixbook, Martha created her own collection of beautiful scrap books and...',
               
                image: require('../assets/images/newwww.jpg'),
            },
            {
                title: 'New Look',
                description:'If you’re a recruiter looking to improve your time management skills, you’ve come to the right place! you will learn an awesome 4 step time management technique. Bonus: Useful time management tips and apps included!',
                
                image: require ('../assets/images/new.jpg'),
            },
            { 
                title: 'GetInvolved',
                description:'Motivation is a powerful, yet tricky beast. Sometimes it is really easy to get motivated, and you find yourself wrapped up in a whirlwind of excitement. Other times ...',

                image: require('../assets/images/neww.jpg'),
            },
            {
                title: 'Blobitecture',
                description:'A mashup of the words “blob” and “architecture,” blobitecture is the name for the architectural style of buildings designed with totally unique, organic forms, often ..',
                image: require('../assets/images/newww.jpg'),
            },
            {
                title: 'Color Psychology',
                description:'Theres a whole science in the meanings of different colors. As an entrepreneur or designer, its essential to be aware of these color meanings and choose your ...',
                image: require('../assets/images/newwwww.jpg') ,
            }
          ]
        }
        
    }
   

    render(){
        var imgStyle={
            width:"150px",
            height :"100px",
        }

        const program = this.state.events.map((event) =>{
        return(
            
            <div className="pt-2">
                <Media tag ="ul">
                    <Media  className="hover mr-4" >
                     <Media object style={imgStyle} src={event.image} />
                    </Media>
                    <Media body className="">
                        <Media heading>{event.title}</Media>
                        <p className="limit">{event.description}</p>
                        <p className="limit">{event.location}</p>
                    </Media>
                    
              </Media>
        </div>
        
        );
        });


        const topEvents = this.state.events.map((event) =>{
            return(
                
                <div className="m-2">
                   <Card>
                        <CardImg top style={{height :"150px"}} src={event.image} alt=" image" />
                        <CardBody>
                        <CardTitle>{event.title}</CardTitle>
                        <CardSubtitle>20th March</CardSubtitle>
                        <CardText>{event.description}</CardText>
                        <Button>See More</Button>
                        </CardBody>
                    </Card>
            </div>
            
            );
            });

        return(
                <div className="row mr-0">
                    <div className="col-md-9">
                    <Media list>
                        <h3 className="m-4">Events</h3>
                        {program
                    }</Media>
                    </div>
                    <div className="col-md-3">
                        <h3 className="m-4"> Top Events</h3>
                        {topEvents}
                    </div>
                   
                </div>
        )
    }

}

export default Program;