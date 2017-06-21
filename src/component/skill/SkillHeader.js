import React from 'react';

const SkillHeader = () => {
    return (
        <div className="skill-header row">
            <img className="col-xs-5 col-xs-push-1 img-responsive floating-box" src="assets/plant.jpg" alt="Profile Picture"></img>
            <h2 className="floating-box">Skills</h2>
            <button type="button" className="btn glyphicon glyphicon-menu-right btn-square floating-box"></button>
        </div>
    );
};

export default SkillHeader;