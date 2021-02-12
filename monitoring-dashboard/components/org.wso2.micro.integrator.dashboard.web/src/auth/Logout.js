import React, { Component } from 'react';
import AuthManager from './AuthManager';
import {Redirect} from 'react-router';

export default class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedOut: true
        }
    }

    componentWillMount() {
        AuthManager.logout()
            .then(() => {
               this.setState({
                   loggedOut: true
               });
            });
    }

    render() {
        if (this.state.loggedOut) {
            return <Redirect to="/login"/>
        }
        return "";
    }
}