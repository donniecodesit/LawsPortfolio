import React from "react";
import image from "../images/computertools.png";

export default function Skills() {
    return (
        <article className="container my-3" id="skills">
            <section className="InfoRow">
                <div className="col-5">
                    <img src={image} alt="pink square" className="rounded" />
                </div>
                <div className="col-7">
                    <h2>Technical Skills:</h2>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Languages and Libraries:</p>
                    <p className="mt-0">JavaScript, SQL, Express, React, Node.JS, HTML, CSS, C#, Discord.Net</p>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Programs and Tools:</p>
                    <p className="mt-0">Visual Studio Code, Git, GitHub, MongoDB, Node Package Manager, Heroku, Vercel, Mocha, Chai</p>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Other:</p>
                    <ul style={{listStyle: "none", padding: "0px"}}>
                        <li>Kdenlive <i>(Video Editing)</i></li>
                        <li>Paint.NET <i>(Image Editing)</i></li>
                        <li>Substance Painter <i>(Model Texturing)</i></li>
                        <li>Unity <i>(VRChat Publishing)</i></li>
                    </ul>
                </div>
            </section>
        </article>
    );
}