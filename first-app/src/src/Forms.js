import React, { Component } from 'react';

class Forms extends Component {
    constructor(){
        super();
        this.state={
            username1 : '',
            
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleChange1= this.handleChange1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(event){
    
        this.setState({
            username1:event.target.value
        })
    }
    
    onSubmit(event) {
        alert('UserName: ' + this.state.username1);
        alert(this.refs.pass.value);
        event.preventDefault();
      }
      popup(){
          alert(this.refs.select.value);
      }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <h3> ControlledForms & UnControlledForms in React </h3>
                User: <input type="text" placeholder="username" value={ this.state.username1 } onChange={ this.handleChange }/>
                Password: <input type="password" placeholder="password" ref="pass"/>
                Country: <select ref="select" onChange={()=>this.popup()}>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    </select>
                <br></br><input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Forms;