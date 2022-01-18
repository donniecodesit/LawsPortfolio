import React from "react";
import image from "../images/projects.png";

export default function Projects() {
    return (
        <article className="container my-3" id="projects">
            <scetion className="InfoRow">
                <div className="col-7">
                    <h2>Projects:</h2>
                    <div className="flex row justify-content-around">
                        <h3>Flashcards Applicaiton</h3> 
                        <a href="https://github.com/donovanlaws/flashcards" target="_blank" rel="noreferrer">Project Link</a>
                    </div>
                    <ul>
                        <li>Built with JavaScript, React, HTML, and CSS.</li>
                        <li>Developed a full-stack application that lets users manage decks of cards to study and review.</li>
                        <li>Engineered interactive components that utilized react states to display content from the local database.</li>
                    </ul>
                    <div className="flex row justify-content-around">
                        <h3>PrototonBot Discord Bot</h3> 
                        <a href="https://github.com/donovanlaws/PrototonBot" target="_blank" rel="noreferrer">Project Link</a>
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
            </scetion>
        </article>
    );
}