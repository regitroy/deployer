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
            <div>
                <ProgressBar animated now={this.state.progress} />
            </div>
        );
    }

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() { 
        let data = this.props.data;
        let date = new Date(data.create_date);
        return (
            <Col md="4" style={{marginBottom: 20}}>
                <Card>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>Version: {data.version}</Card.Text>
                        <Card.Text>Date: {date.toDateString()}</Card.Text>
                        <Card.Text>URL: {data.url}</Card.Text>
                        
                        {this.state.finishedProgress ? (
                            <p>
                                <Button variant="danger" onClick={() => this.onDelete(data._id)}>Delete</Button>
                            </p> 
                        ): this.loader()}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
 
export default DeployCard;