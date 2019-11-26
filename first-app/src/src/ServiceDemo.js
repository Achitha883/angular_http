import React, { Component } from 'react';
import axios from 'axios';

class ServiceDemo extends Component {
    constructor(){
        super();
        axios.get("https://jsonplaceholder.typicode.com/users",
        {params: { id:5 } })
        .then((response)=>{
            console.log("Post Json Data" + JSON.stringify(response.data));
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        return(
            <div>
                <h3> Service Demo </h3>


            </div>
        )
    }
}

export default ServiceDemo;