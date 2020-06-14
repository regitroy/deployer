import React, { Component } from 'react';
import {Modal, Row, Container, Col, Button, Form} from 'react-bootstrap';

class CreateTaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            versions: [],
            createNewData: {
                templete: "",
                url: "",
                version: ""
            }
        }
    }

    setModalShow = () => {
        this.props.onCreateModelHide();
    }

    setUrl = (event) => {
        if(!event.target.value){
            return;
        }
        this.setState({
            createNewData: {
                ...this.state.createNewData,
                ...{url: event.target.value}
            }
        });
    }

    setVersion = (event) => {
        if(!event.target.value){
            return;
        }
        this.setState({
            createNewData: {
                ...this.state.createNewData,
                ...{version: event.target.value}
            }
        });
    }

    setVersionOptions = (event) => {
        let id = event.target.value;
        let deploymentData = this.props.deploymentData.filter(x => {
            return x._id == id;
        })
        if(deploymentData.length == 0){
            return;
        }
        this.setState({
            versions: deploymentData[0].versions,
            createNewData: {
                ...this.state.createNewData,
                ...{templete: event.target.value}
            }
        });
    }

    onFormSubmit = () => {
        this.props.createHistory(this.state.createNewData);
        this.props.onCreateModelHide();
    }

    modal(){
        return (
            <Modal 
                show={this.props.show} 
                onHide={() => this.setModalShow(false)} 
                aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create New Deployment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col>
                                {/* <Form onSubmit={return false}> */}
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>URL</Form.Label>
                                        <Form.Control type="text" placeholder="Enter url" onKeyUp={this.setUrl} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Templete Name</Form.Label>
                                        <Form.Control as="select" 
                                            defaultValue="Choose..."
                                            onChange={this.setVersionOptions}
                                            >
                                            <option>Choose...</option>
                                            {
                                                this.props.deploymentData.map(d => {
                                                    return(
                                                        <option key={d._id} value={d._id}>{d.name}</option>
                                                    );
                                                })
                                            }
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Version</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..."
                                            onChange={this.setVersion}
                                            >
                                            <option>Choose...</option>
                                            {
                                                this.state.versions.map(d => {
                                                    return(
                                                        <option key={d} value={d}>{d}</option>
                                                    );
                                                })
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
                                        Submit
                                    </Button>
                                {/* </Form> */}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }

    render() {
        return this.modal();
    }
}

export default CreateTaskModal;