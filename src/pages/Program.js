import React, { Component} from 'react';


class Program extends Component{
    constructor(props){
        super(props)
        this.state={
            Events :[
            {
                title: 'New Look',
                description:'ndmkkdmmkdmmfkkmnskksmmdkkskks',
                location:'Adenta',
                image:'./assets/download.jpg',
            },
            {
                title: 'New Look',
                description:'dkmdnvkdkkdkkd',
                location:'East Legon',
                image:'./assets/download(1).jpg',
            },
            {
                title: 'Neat',
                description:'kkv vkkdkksmmsowmfmfkdvkmv',
                location:'Legon',
                image:'./assets/download(2).jpg',
            },
            {
                title: 'Kaode',
                description:'clkkvmd vk fmemvmmdmv',
                location:'Adenta',
                image:'./assets/images.jpg',
            },
            {
                title: 'Lets go',
                description:'mmfkk knndvkkdvdsvsdvdv',
                location:'Adj',
                image:'./assets/images(1).jpg',
            }
          ]
        }
    }

    render(){
        const program = this.state.events.map((event) =>{
        return(
            <div key={event.id} className="column">
                <li>{this.image}</li>

            </div>
        );
        });

        return(
            <div>
                <div>
                    {program}
                </div>
            </div>
        )
    }

}

export default Program;