import React, { Component } from 'react';
import Header from '../common/Header';
import CreateTaskModal from '../dashboard/CreateTaskModal';
import DeployCard from '../dashboard/DeployCard';
import {Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap';
import { connect } from 'react-redux';
import action from '../../redux/actions';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    card() {
        return (
            <Card>
                <Card.Header as="h5">
                    Deploying <Button onClick={this.props.showCreateTaskModal} style={{fontSize: 11}}>Create New</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>No Deployment</Card.Title>
                    <Row>
                        <DeployCard newAddition={true} />
                        <DeployCard newAddition={true} />
                        <DeployCard newAddition={true} />
                        <DeployCard newAddition={true} />

                        <DeployCard />
                        <DeployCard />
                        <DeployCard />
                        <DeployCard />
                        <DeployCard />
                    </Row>
                </Card.Body>
            </Card>
        );
    }

    render() { 
        return (
            <>
                <Header />
                <br/>
                <Container>
                    <Row>
                        <Col>
                            {this.card()}
                            
                        </Col>
                    </Row>
                </Container>
                <CreateTaskModal 
                    show={this.props.showCreateModal} 
                    onCreateModelHide={this.props.onCreateModelHide}
                    deploymentData={this.props.deploymentData} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{ 
        showCreateModal: state.dashboard.showCreateModal,
        deploymentData: state.dashboard.deployments
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        showCreateTaskModal: () => {
            dispatch(action.dashboard.showModal());
        },
        onCreateModelHide: () => {
            dispatch(action.dashboard.hideModal());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);