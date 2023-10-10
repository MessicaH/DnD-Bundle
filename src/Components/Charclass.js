import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./Charclass.css";

export default function Charclass() {
    return <>
    <h2 className='container-fluid app-header'>Character Classes</h2>
    <div className='container app-body'>
        <p>In Dungeons & Dragons, classes define a character's profession, skills, and abilities, shaping their role 
            within the adventuring party. There is a diverse array of classes to choose from, each with its own unique 
            features and playstyle. For example, Wizards are masters of arcane magic, capable of casting powerful spells, 
            while Fighters excel in combat and martial prowess, and Rogues are skilled in stealth and subterfuge.</p>
        <p>Classes provide a framework for character development, determining a character's hit points, combat skills, 
            spellcasting ability (if applicable), and special abilities gained as they level up. 
            Players select a class for their character during character creation, and their choice deeply 
            influences their character's capabilities and profession or role in the group, contributing to the richness 
            and diversity of storytelling and gameplay experiences in D&D.</p>
    </div>
</>
}