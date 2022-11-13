import React from "react";
import image from "../images/projects.png";

export default function Projects() {
    return (
        <article className="container my-3" id="projects">
            <section className="InfoRow">
                <div className="col-7">
                    <h2>Some Projects!</h2>
                    <div className="flex row justify-content-around">
                        <h3>Restaurant Reservation App</h3> 
                        <a href="https://github.com/donniecodesit/restaurant-reservation-system" target="_blank" rel="noreferrer">Project Link</a>
                    </div>
                    <ul>
                        <li>Built a PERN stack application to book and edit reservations, stored an managed with a database.</li>
                        <li>Engineered multiple routes frontend and backend to manage and edit reservations and tables using the API.</li>
                        <li>Managed different environments for development, testing, and production, alongside version control with GitHub.</li>
                    </ul>
                    <div className="flex row justify-content-around">
                        <h3>PrototonBot Discord Bot</h3> 
                        <a href="https://github.com/donniecodesit/PrototonBot" target="_blank" rel="noreferrer">Project Link</a>
                    </div>
                    <ul>
                        <li>Built with JavaScript, Node.JS, Discord.Net, C#, and MongoDB.</li>
                        <li>Developed a chatbot application that users could interact with for entertainment purposes.</li>
                        <li>Led and communicated with a small team of developers, implemented user requests and features.</li>
                    </ul>
                </div>
                <div className="col-5">
                    <img src={image} alt="pink square" className="rounded" />
                </div>
            </section>
        </article>
    );
}
