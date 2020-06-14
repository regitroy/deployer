import actionType from '../actionType';
let initialState = {
    showCreateModal: false,
    deployments: [
        {
            "_id": "acbcnnd",
            "name": "Natural One",
            "versions": [
                "1.0.0",
                "1.0.1",
                "1.1.0",
                "2.0.0"
            ]
        },
        {
            "_id": "acbcnn12",
            "name": "Techno 01",
            "versions": [
                "1.0.0",
                "1.1.1",
                "2.0.1"
            ]
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type){
        case actionType.SHOW_CREATE_TASK_MODAL:
            return {
                ...state,
                ...{showCreateModal: true}
            }
        case actionType.HIDE_CREATE_TASK_MODAL:
            return {
                ...state,
                ...{showCreateModal: false}
            }
        case actionType.SET_DEPLOYMENT_TYPE: 
            return {
                ...state,
                ...{deployments: action.data}
            }
        default:
            return state;
    }
}
