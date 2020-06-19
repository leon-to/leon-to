import React from 'react'; 
import {Jumbotron, Button, Container} from 'react-bootstrap';
import './Home.css';
import {PROFILE} from '../../const';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    
    onScroll = event => window.scrollTo(0, this.ref.current.offsetTop)

    render(){
        return (
            <Jumbotron ref={this.ref} className='Home'>
                <div className='Home-body'>
                    <h1>Hello, world!</h1>
                    <p>{PROFILE.summary}</p>
                    <p>
                    <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </Jumbotron>
        );
    }
}