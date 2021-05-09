import React, { Component } from 'react'
// import React from 'react';


class Home extends Component {
    render() {
        return (
            <div className="welcome">
                <br /><br /><br /><br /><br />
                <video autoPlay muted loop id="myVideo">
                    <source src="movieintro.mp4" type="video/mp4" />
                </video>

                <div className="video-content">
                <h5>All Rights Reserved to Universal Pictures</h5>
                </div>
            </div>
        )
    }
}

export default Home;