import React from "react";
import image from "../images/phoenixnight.png";

export default function About() {
    return (
        <article className="container my-3" id="about">
            <scetion className="InfoRow">
                <div className="col-7">
                    <h2>About Me:</h2>
                    <p>I graduated from Crest High School in North Carolina in 2018 and began a self-employed career in Content Creation that worked well for me for a few years. In 2019 I moved to Arizona and have began pursuing knowledge in the tech industry, learning how to develop software and web applications.</p>
                    <p>A lot of what I've learned is self-taught, including basic JavaScript experience and also C# (and Discord.Net) to develop personal projects. I've found I enjoy working with, and organizing databases using MongoDB. My OS is Windows 10 (get outta here, Windows 11) and my IDE is Visual Studio Code.</p>
                    <p>I enjoy expressing myself with those I interact with, professionalism is important but in the present and future, it is great for everyone to also get to know the person they're interacting with, or communication may hit a wall. I thrive on experimenting with creativity and challenges or trying to find odd solutions to problems or cleanup, showing I want to be able to solve technical challenges given to me for solo work or teamwork.</p>
                </div>
                <div className="col-5">
                    <img src={image} alt="pink square" className="rounded" />
                </div>
            </scetion>
        </article>
    );
}