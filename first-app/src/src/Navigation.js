import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                <Link to="/HOC">HOC</Link> &nbps;&nbps;
                <Link to="/HOCProps">HOCProps</Link>
                &nbps;&nbps;                
                <Link to="/ServiceDemo">ServiceDemo</Link>
                </ul>
            </div>
        )
    }

}

export default Navigation;

