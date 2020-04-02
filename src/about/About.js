import "./About.css";
import React from 'react'
import {Link} from 'react-router-dom';

export class About extends React.Component {
    render() {
        console.log('got here')
        return (
            <div className="aboutPage">
                <Link to="/" className="backButton" align="center">
                    Back
                </Link>
            </div>
        )
    }
}