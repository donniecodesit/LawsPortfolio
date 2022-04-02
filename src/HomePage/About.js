import React from "react";
import image from "../images/phoenixnight.png";

export default function About() {
    return (
        <article className="container my-3" id="about">
            <section className="InfoRow">
                <div className="col-7">
                    <h2>About Me:</h2>
                    <p>
                        After graduating from High School in North Carolina in 2018, I began a self-employed career in Content Creation and Streaming, which worked out well for me for a few years!
                        In 2019 I moved to Arizona where I continued doing so, until I began pursuing knowledge in the tech industry, learning how to develop software and web applications.
                    </p>
                    <p>
                        Some of what I've learned is self-taught, including some core JavaScript experience and also a small amount of C# (with Discord.Net) to develop personal projects.
                        As of April 2021, I completed Thinkful's Immersive Software Engineering Program, and in 5 quick but knowledge packed months, have completed with a certification and lots of Web Dev experience!
                        I also enjoy working with and organizing databases, so far I have had experience with ElephantSQL and MongoDB. I work in Visual Studio Code on Windows 10.
                    </p>
                    <p>
                        I love expressing myself naturally to those I interact it. Professionalism is important, and I also believe it's great for everyone to get to know and understand the person they're talking to!
                        I thrive on experimenting with creativity or a lengthy challenge, and trying to find solutions (odd or not) to problems, or cleanup, and show I am able to solve technical challenges given for solo work or teamwork.
                    </p>
                </div>
                <div className="col-5">
                    <img src={image} alt="pink square" className="rounded" />
                </div>
            </section>
        </article>
    );
}