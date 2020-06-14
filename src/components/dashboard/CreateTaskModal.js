import React, { Component } from 'react';
import {Modal, Row, Container, Col, Button, Form} from 'react-bootstrap';

class CreateTaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            versions: []
        }
    }

    setModalShow = () => {
        this.props.onCreateModelHide();
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
            versions: deploymentData[0].versions
        });
    }

    onFormSubmit = () => {
        return false;
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
                                <Form onSubmit={this.onFormSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>URL</Form.Label>
                                        <Form.Control type="email" placeholder="Enter url" />
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
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
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