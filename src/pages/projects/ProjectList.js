import React from 'react';
import {Carousel, Card, Button} from 'react-bootstrap';
import './ProjectList.css'

export default class ProjectList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <container className='Project-list'>
                {this.props.project_list.map(project =>
                    <Card className='Project'>
                        <Card.Img className='Project-img' variant="top" src={project.img} />
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            {project.link ?
                                <Button variant="primary">Visit</Button>
                                : null
                            }
                        </Card.Body>
                    </Card>
                )}
            </container>
            
        );
    }
}