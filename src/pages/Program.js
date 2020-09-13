import React, { Component} from 'react';
import { Media } from 'reactstrap';


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
            
            <div className="column">
                <Media tag ="ul">
                    <Media left className="hover" >
                     <Media object  align ="left" style={imgStyle} src={event.image} />
                    </Media>
                    <Media body className="block">
                        <Media heading>{event.title}</Media>
                        <p className="limit">{event.description}</p>
                        <p className="limit">{event.location}</p>
                    </Media>
                    
              </Media>
        </div>
        
        );
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {program
                    }</Media>
                </div>
            </div>
        )
    }

}

export default Program;