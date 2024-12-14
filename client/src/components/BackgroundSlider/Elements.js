import React from 'react';
import {
    BluePlanetBox,
    MoonBox,
    OrangePlanetBox,
    SpaceMarineBox,
    StantionBox,
    UFOBox,
    YellowPlanetBox
} from "./elements/ElementsStyle";
import OrangePlanet from "../../assets/Background/OrangePlanet.svg";
import Moon from "../../assets/Background/Moon.svg";
import Stantion from "../../assets/Background/Stantion.svg";
import SpaceMarine from "../../assets/Background/SpaceMarine.svg";
import YellowPlanet from "../../assets/Background/YellowPlanet.svg";
import UFO from "../../assets/Background/UFO.svg";
import BluePlanet from "../../assets/Background/BluePlanet.svg";

const Elements = () => {
    return (
        <div>
            <OrangePlanetBox src={OrangePlanet} />
            <MoonBox src={Moon}/>
            <StantionBox src={Stantion}/>
            <SpaceMarineBox src={SpaceMarine} />
            <YellowPlanetBox src={YellowPlanet} />
            <UFOBox src={UFO} />
            <BluePlanetBox src={BluePlanet} />
        </div>
    );
};

export default Elements;