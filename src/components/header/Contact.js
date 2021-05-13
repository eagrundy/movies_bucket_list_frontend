// import React from 'react';
// import { Link } from "react-router-dom";

function Contact() {
    return(
    <div className="contact">
        <img src="email.jpg" alt="contact?" />
        
        <p>Are you happy with this app? 
        <br/>Do you have a suggestion?
        <br/>Contact us at our office at 1-800-MOVIES. 
        <br/>You can also send us an email at movies.info@gmail.com</p>
        <br />
        <div className="social">
        Follow us and send us a message on our social media:<br /><br />
        <img src="twitter.png" alt="twitter" onClick={() => window.open( `https://www.twitter.com`)} />
        <img src="facebook.png" alt="facebook" onClick={() => window.open( `https://www.facebook.com`)} />
        <img src="github.jpg" alt="github" onClick={() => window.open( `https://github.com/eagrundy/movies_bucket_list_frontend`)} />
        <br /><br /><br /><br />
        </div>
    </div>
    )
}

export default Contact;