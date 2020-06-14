import React, { Component } from 'react';
import Header from '../common/Header';
import CreateTaskModal from '../dashboard/CreateTaskModal';
import DeployCard from '../dashboard/DeployCard';
import {Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap';
import { connect } from 'react-redux';
import action from '../../redux/actions';
import network from '../../core/network';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        network.rest.get(network.apis.GET_DEPLOYMENT, (resp) => {
            this.props.setDeployData(resp);
        })

        this.getHistory();
    }

    getHistory = () => {
        network.rest.get(network.apis.GET_HISTORY, (resp) => {
            this.props.resetHistory(resp);
        })
    }

    createHistory = (data) => {
        let that = this;
        network.rest.post(network.apis.CREATE_DEPLOYMENT, data, function(resp){
            console.log("THIS -> ", this.props);
            network.rest.success("Created new deployment.");
            resp.newAdded = true;
            this.props.addHistory(resp);
        }.bind(this));
    }

    onDelete = (id) => {
        let that = this;
        network.rest.post(network.apis.DELETE_DEPLOYMENT, {historyId: id}, function(resp) {
            network.rest.success("History deleted.");
        }.bind(this));
        this.props.onDelete(id);
    }

    card() {
        return (
            <Card>
                <Card.Header as="h5">
                    Deploying <Button onClick={this.props.showCreateTaskModal} style={{fontSize: 11}}>Create New</Button>
                </Card.Header>
                <Card.Body>
                    {
                        (this.props.historyData.length == 0) ? 
                            <Card.Title>No Deployment</Card.Title> : ""
                    }
                    
                    <Row>
                        {
                            this.props.historyData.map(h => {
                                return <DeployCard 
                                    key={h._id}
                                    newAddition={h.newAdded} 
                                    data={h}
                                    onDelete={this.onDelete}
                                />
                            })
                        }
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
                    deploymentData={this.props.deploymentData}
                    createHistory={this.createHistory} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{ 
        showCreateModal: state.dashboard.showCreateModal,
        deploymentData: state.dashboard.deployments,
        historyData: state.dashboard.histories
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        showCreateTaskModal: () => {
            dispatch(action.dashboard.showModal());
        },
        onCreateModelHide: () => {
            dispatch(action.dashboard.hideModal());
        },
        setDeployData: (data) => {
            dispatch(action.dashboard.setDeploymentType(data));
        },
        addHistory: (data) => {
            dispatch(action.dashboard.addHistory(data));
        },
        resetHistory: (data) => {
            dispatch(action.dashboard.setHistory(data));
        },
        onDelete: (id) => {
            dispatch(action.dashboard.deleteHistory(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);