import React from "react";

export default function Intro() {
    return (
        <article className="container my-3" id="intro">
            <section className="InfoRow">
                <div className="col-5">
                    <img src="https://avatars.githubusercontent.com/u/91988909?v=4" className="border border-secondary rounded-circle" alt="Donovan" style={{}}/>
                </div>
                <div className="col-7">
                    <h2>Happy to work with you!</h2>
                    <h3>Friendly introduction!</h3>
                    <p>Hey there! My name is Donovan, previously I was a strongly self-driven content creator, and now I am learning and working as a Software Developer.</p>
                    <p>I'm currently enrolled in Thinkful's Software Engineering Immersion Program, and live in Peoria AZ, about half an hour away from Phoenix AZ!</p>
                    <p>I work with JavaScript, React, Express, Node.JS, C#, Discord.Net, and more to create frontend and backend applications.</p>
                    <p>Feel welcome to explore this webpage and contact me if you need to!</p>
                </div>
            </section>
        </article>
    );
}