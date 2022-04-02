import React from "react";

export default function Header() {
    return (
        <div className="container my-2">
            <div className="InfoRow">
                <div className="col-5">
                    <h1>Donovan Laws</h1>
                    <h2>Web Developer</h2>
                </div>
                <div className="col-7">
                    <div className="InfoRow">
                        <div>
                            <a className="App-link" href="#intro">Introduction</a>
                        </div>
                        <div>
                            <a className="App-link" href="#about">About Me</a>
                        </div>
                        <div>
                            <a className="App-link" href="#skills">Skills</a>
                        </div>
                        <div>
                            <a className="App-link" href="#projects">Projects</a>
                        </div>
                        <div>
                            <a className="App-link" href="#contact">Contact Me</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}