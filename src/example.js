import React, { Component } from 'react';
import {Input,Button}  from 'antd'
import {connect} from 'react-redux'
import store from './store'
// import './example.scss'


class Example extends Component {
    constructor(props) {
        super(props);
        this.state =store.getState()
    }
    render() { 
        return ( 
            <>
             <Input value={this.props.inputValue} onChange={this.props.inputChange}/>
             <Button>点击</Button>
             <div className='login'>
                 删除
             </div>
            </>
         );
    }
}

const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            console.log(e.target.value)
            let action={
                type:"changeInput",
                value:e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Example)