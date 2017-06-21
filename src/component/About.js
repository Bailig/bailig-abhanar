
import React from 'react';

const About = () => {
    return (
        <section className="section-about">
            <div className="row">
                <h1 className="col-xs-10 col-xs-push-1">Bailig Abhanar</h1>
            </div>
            <div className="row">
                <p className="col-xs-10 col-xs-push-1 subtitle">A Web Developer</p>
            </div>
            <div className="row">
                <img className="col-xs-9 col-xs-push-2 img-responsive floating-box" src="assets/profile-picture.jpg" alt="Profile Picture"></img>
            </div>
            <div className="row">
                <p className="col-xs-8 col-xs-push-1 text-box floating-box">Hi there! Full name's Bailig Abhanar but my legal name is Lige Bai. I'm a web developer born & raised in Inner Mongolia, China, currently working in Ottawa at KIVISTA. I have a passion for web development and love to create for web and mobile devices.</p>
            </div>
        </section>
    );
};

export default About;