import React, {Component} from 'react'

class Container1 extends Component{

    Arr1=[
        {id:1,name: 'Aryan'},
        {id:2,name: 'Ayush'},
        {id:3,name: 'Animesh'}
    ]

    //functional component similar
    RenderListItem=(props)=>(
        <div>
            {props.item.name}
        </div>
    )
    render(){
        return(
        <div>
            {this.props.name}
            {/*using ternary operator conditional rendering*/}
            {1>2?<p>True</p>:<p>False</p>}

            {/*example of rendering list item. key is must as unique id*/}
            {this.Arr1.map((item)=>(<this.RenderListItem key={item.id} item={item} />))}
        </div>)
    }
}

export default Container1