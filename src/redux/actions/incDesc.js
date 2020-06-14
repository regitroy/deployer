import actionType from '../actionType';

export default {
    inc: (by) => {
        return {
            type: actionType.INCR,
            by
        }
    },
    desc: (by) => {
        return {
            type: actionType.DESCR,
            by
        }
    },
    get: () => {
        return {
            type: actionType.GET
        }
    }
}