import React,{Component} from 'react';

class State_eg extends Component{
    state={
        counter:0
    }
    increment=()=>{
        this.setState({counter:5})
    }
    render(){
        return (
            <div className='state'>
                <button onClick={()=>this.increment()}>Press</button>
                <div>div 1 {this.state.counter}</div>
                <div>div 3</div>
                <div>div 2</div>
            </div>
        )
    }
}

export default State_eg;