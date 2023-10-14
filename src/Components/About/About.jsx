import React from "react";
import "./About.css";
import profileIMG from "../../assets/about-profile.jpg";
import { CTA } from "./CTA";

export const About = () => {
    return (
        <section>

            <div className="container about__container">

                <div className="about__content">
                    <div>
                        <h5>Hola soy</h5>
                        <h1>Marcos</h1>
                        <h5 className="text-light">Desarrollador Front-end</h5>
                    </div>

                    <p>
                        Actualmente, estudio Ciencias de la Computación en la <a href="https://www.unc.edu.ar/">Universidad Nacional de Córdoba</a>, lo que me proporciona una sólida base académica en el campo de la informática.<br />
                        Me apasiona el desarrollo front-end, y disfruto creando interfaces de usuario atractivas y funcionales. Siempre busco nuevas formas de ofrecer soluciones creativas.<br />
                        Me destaco por aprender rápido y ser ágil en la ejecución de tareas asignadas. Esto me permite adaptarme a las cambiantes demandas de la industria de la tecnología.<br />
                        Disfruto trabajando con una variedad de tecnologías, incluyendo HTML5, CSS3, SASS, Bootstrap 5, JavaScript, TypeScript, React JS, Angular 12+, Angular Material, C#, C, Haskell, Linux y Windows.
                    </p>

                    <CTA />

                </div>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={profileIMG} alt="About_Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
