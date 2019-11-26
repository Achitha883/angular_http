import React, { Component } from 'react';

let Base = (Child)=> class extends Component {
    constructor(){
        super();
        this.state = {
            id: 100
        };
    }
    UpdateCount(){
        this.setState({
            id: this.state.id+5
        })

    }
    render(){
        return(
            <div>
            <h2>Child-1</h2>
            <Child id={this.state.id} UpdateCount={() => this.UpdateCount()}/>
            </div>

        )
    }

}
const Button1 = (props)=>{
    console.log(props.id);
    return(
    <button onClick={props.UpdateCount}>Click</button>
    )
}
let NewButton1 = Base(Button1);
const label = (props)=>{
    console.log(props.id);
    return(
    <label onClick={props.UpdateCount}>Click</label>
    )
}
let NewLabel = Base(label);
class HOCProps extends Component {
    render(){
        return(
            <div>
                This is Parent
                <NewButton1/>
                <NewLabel/>
            </div>
        )
    }

}

export default HOCProps;