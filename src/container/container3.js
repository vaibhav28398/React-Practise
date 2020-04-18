import React, {Component} from 'react'

class Container3 extends Component{
    state={
        value: ""
    }

    //dont use old syntax like handleChange(event){} because in this you can't use 'this' directly
    handleChange=(event)=>{

        //see no id
        this.setState({value:event.target.value})
 
        console.log(event.target.value)
    }

    handleSubmit=(event)=>{

        //this prevents the page from reloading
        event.preventDefault()

        //id is there
        console.log(event.target.name.value)

        //alternate way
        console.log(this.state.value)
    }
     
    render(){
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                <label>Name</label>
                
                {/* We don't call the handle change iunsytead pass a reference to it*/}
                <input id="name" type="text" onChange={this.handleChange}/>
                <button type="submit">Submit</button>

                </form>
                
            </div>
        )
    }
}

export default Container3