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
    }
}