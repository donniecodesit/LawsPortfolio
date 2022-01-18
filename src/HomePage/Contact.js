import React from "react";
import image from "../images/socials.png";

import iconGit from "../images/github.png";
import iconMail from "../images/gmail.png";
import iconTwitter from "../images/twitter.png";
import iconLinkedIn from "../images/linkedin.png";

export default function Contact() {
    return (
        <article className="container my-3" id="contact">
            <scetion className="InfoRow">
                <div className="col-5">
                    <img src={image} alt="pink square" />
                </div>
                <div className="col-7">
                    <h2>Contact Me:</h2>
                    <a href="https://github.com/donovanlaws" target="_blank" rel="noreferrer">
                        <img class="ico" src={iconGit} alt="GitHub Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/donovanlaws/" target="_blank" rel="noreferrer">
                        <img class="ico" src={iconLinkedIn} alt="LinkedIn Logo" />
                    </a>
                    <a href="mailto:donovanlaws@gmail.com">
                        <img class="ico" src={iconMail} alt="GMail Logo" />
                    </a>
                    <a href="https://twitter.com/donovan_laws" target="_blank" rel="noreferrer">
                        <img class="ico" src={iconTwitter} alt="Twitter Logo" />
                    </a>
                </div>
            </scetion>
        </article>
    );
}