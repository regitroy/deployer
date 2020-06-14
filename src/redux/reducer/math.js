import actionType from '../actionType';
let initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.INCR: 
            return {...state, ...{count: state.count + 1}};
        case actionType.DESCR: 
            return {...state, ...{count: state.count - 1}};
        case actionType.GET: 
            return state;
        default:
            return state;
    }
}