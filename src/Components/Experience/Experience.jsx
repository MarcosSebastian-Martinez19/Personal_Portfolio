import React from "react";
import "./Experience.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNpm, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiAngular, SiNetlify, SiLinux, SiVisualstudiocode, SiCsharp, SiWindows, SiNodedotjs, SiC, SiHaskell } from "react-icons/si";
export const Experience = () => {
    return (
        <section>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Lenguajes</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                            <FaHtml5 className="experience__details-icon" />
                            <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaCss3Alt className="experience__details-icon" />
                            <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiJavascript className="experience__details-icon" />
                            <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiTypescript className="experience__details-icon" />
                            <h4>TypeScript</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiCsharp className="experience__details-icon" />
                            <h4>C#</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiC className="experience__details-icon" />
                            <h4>C</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiHaskell className="experience__details-icon" />
                            <h4>Haskell</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Librerias y Frameworks</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                            <FaBootstrap className="experience__details-icon" />
                            <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaReact className="experience__details-icon" />
                            <h4>React JS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiAngular className="experience__details-icon" />
                            <h4>Angular</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Herramientas</h3>
                    <div className="experience__content">
                        
                        <article className="experience__details">
                            <div>
                            <FaGitAlt className="experience__details-icon" />
                            <h4>Git</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaGithub className="experience__details-icon" />
                            <h4>GitHub</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiVisualstudiocode className="experience__details-icon" />
                            <h4>Visual Studio Code</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiNetlify className="experience__details-icon" />
                            <h4>Netlify</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Sistemas Operativos</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                            <SiLinux className="experience__details-icon" />
                            <h4>Linux</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiWindows className="experience__details-icon" />
                            <h4>Windows</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};
