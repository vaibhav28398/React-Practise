import React, {Component} from 'react'

class Container2 extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            stateprop1: "Our initial prop",
            stateprop2:5
        }
    }

    // wrong to change state directly
    changeState(){
        this.state.stateprop1="New state"
    }

    // correct way
    changeState1(){
        this.setState({stateprop1: "New Value"})
    }

    // another correct way using prevState
    changeState2(){
        this.setState((prevState,props)=>({
            stateprop2:prevState.stateprop2+1
        }))
    }

    //another way similar to prevState
    changeState3(){
        this.setState({stateprop2:this.state.stateprop2+1})
    }

    //can change more than one prop of state at once
    changeState4(){
        this.setState({stateprop2:this.state.stateprop2+1,
        stateprop1: this.state.stateprop1+'L'})
    }

    render(){
        return(
        <div>
            <button onClick={()=>this.changeState4()} >Change</button>
            {this.props.name}
            {this.state.stateprop1}
            {this.state.stateprop2}
        </div>)
    }
}

export default Container2