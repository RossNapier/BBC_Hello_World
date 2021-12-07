import React from "react";
import SolarInfo from "./SolarInfo";
import AllPlanets from "../static/All Planets.png";

//CSS ===============
import '../static/CSS/SolarSystem.css';
//CSS ===============

const SolarSystem = () => {

    console.log('solarsystem rendered')

    return(
        <div className="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo/>
        </div>
    );
};

export default SolarSystem;