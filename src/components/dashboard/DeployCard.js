import React, { Component } from 'react';
import {Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap';
class DeployCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            finishedProgress: false
        }
    }

    random = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    }

    componentDidMount(){
        if(this.props.newAddition){
            this.setState({
                progress: 0,
                finishedProgress: false
            })
            let that = this;
            setInterval(() => {
                let isFinished = false;
                let progress = that.state.progress + that.random(1, 10);
                if(progress >= 100){
                    isFinished = true;
                }
                that.setState({
                    progress: progress,
                    finishedProgress: isFinished
                })
            }, 400)
        }else{
            this.setState({
                progress: 0,
                finishedProgress: true
            })
        }
    }

    loader() {
        return (
            <p>
                <ProgressBar animated now={this.state.progress} />
            </p>
        );
    }

    render() { 
        return (
            <Col md="4" style={{marginBottom: 20}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        
                        
                        {this.state.finishedProgress ? <p><Button variant="danger">Delete</Button></p> : this.loader()}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
 
export default DeployCard;