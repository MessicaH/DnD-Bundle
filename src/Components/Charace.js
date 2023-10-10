import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./Charace.css";

export default function Charace() {
    return <>
    <h2 className='container-fluid app-header'>Character Races (Origins)</h2>
    <div className='container app-body'>
        <p>In Dungeons & Dragons, Races (origins) represent the various humanoid species that inhabit the fantasy worlds of the game. 
            These encompass a wide range of creatures, from classic fantasy races like Humans, Elves, Dwarves, and Halflings 
            to more exotic options such as Dragonborn, Tieflings, and Gnomes.</p>
        <p>Each race comes with unique traits and Abilities, such as enhanced senses, magical abilities, or cultural 
            characteristics, which influence a character's abilities, appearance, and status in the game's world. 
            Players choose a race for their character during character creation. This choice often shapes their character's 
            background and role within the party and the broader narrative of the campaign.</p>
    </div>
</>
}