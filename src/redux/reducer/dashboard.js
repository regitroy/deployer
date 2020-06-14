import actionType from '../actionType';
let initialState = {
    showCreateModal: false,
    deployments: [],
    histories: []
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
        case actionType.ADD_DEPLOYMENT_HISTORY: 
            return {
                ...state,
                ...{histories: [...state.histories, action.data]}
            }
        case actionType.RESET_DEPLOYMENT_HISTORY:
            return {
                ...state,
                ...{histories: action.data}
            }
        case actionType.DELETE_DEPLOYMENT_HISTORY: 
            let history = state.histories.filter((d) => {
                return d._id != action.id
            })
            return {
                ...state,
                ...{histories: history}
            }
        default:
            return state;
    }
}
