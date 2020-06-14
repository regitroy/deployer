import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux';
import incDesc from '../redux/actions/incDesc'

class Counter extends React.Component {

    // dispatch = useDispatch();
    // count = useSelector(state => state.count);
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() { 
        return (
            <div>
                <button onClick={this.props.incr}>+</button> {this.props.count} <button onClick={this.props.desc}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{ 
        count: state.mathOps.count
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        incr: () => {
            dispatch(incDesc.inc(2));
        },
        desc: () => {
            dispatch(incDesc.desc(2));
        },
        fetch: () => {
            dispatch(incDesc.get());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter) ;