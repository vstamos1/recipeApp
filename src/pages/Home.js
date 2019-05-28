import React, { Component } from 'react';
import Header from '../components/Header'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <h4>
            <Header title="Amazing Recipes">
                <Link to="recipes" className="text-uppercase btn btn-secondary btn-large mt-3">Search Recipes</Link>
            </Header>
            
            </h4>
        )
    }
}
