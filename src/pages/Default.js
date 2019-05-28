import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

export default class Default extends Component {
    render() {
        return (
            <h4><Header styleClass="default-hero" title="404">
            <h2 className="text-light text-uppercase">
               Error: No such page
            </h2>
            <Link to="/" className="text-uppercase btn btn-secondary btn-large mt-3">return home</Link>
            </Header>
               
            </h4>
        )
    }
}
