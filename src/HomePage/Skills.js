import React from "react";

export default function Skills() {
    return (
        <article className="container my-3" id="skills">
            <scetion className="InfoRow">
                <div className="col-7">
                    <h2>Skills:</h2>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Languages and Libraries:</p>
                    <p className="mt-0">JavaScript, Express, React, Node.JS, HTML, CSS, C#, Discord.Net</p>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Programs and Tools:</p>
                    <p className="mt-0">Visual Studio Code, Git, GitHub, MongoDB, Node Package Manager, Vercel, Mocha, Chai</p>
                    <p className="mb-0" style={{fontWeight: "bold"}}>Other:</p>
                    <ul style={{listStyle: "none", padding: "0px"}}>
                        <li>Kdenlive <i>(Video Editing)</i></li>
                        <li>Paint.NET <i>(Image Editing)</i></li>
                        <li>Substance <i>(Model Painting)</i></li>
                        <li>Unity <i>(VRChat Publishing)</i></li>
                    </ul>
                </div>
                <div className="col-5">
                    <img src="https://m.media-amazon.com/images/I/21f2IKNySgL._AC_SY355_.jpg" />
                </div>
            </scetion>
        </article>
    );
}