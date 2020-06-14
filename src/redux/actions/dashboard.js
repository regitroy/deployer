import actionType from '../actionType';

export default {
    showModal: () => {
        return {
            type: actionType.SHOW_CREATE_TASK_MODAL
        }
    },
    hideModal: () => {
        return {
            type: actionType.HIDE_CREATE_TASK_MODAL
        }
    },
    setDeploymentType: (data) => {
        return {
            type: actionType.SET_DEPLOYMENT_TYPE,
            data
        }
    },
    setHistory: (data) => {
        return {
            type: actionType.RESET_DEPLOYMENT_HISTORY,
            data
        }
    },
    addHistory: (data) => {
        return {
            type: actionType.ADD_DEPLOYMENT_HISTORY,
            data
        }
    },
    deleteHistory: (id) => {
        return {
            type: actionType.DELETE_DEPLOYMENT_HISTORY,
            id
        }
    }
}