import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./Home.css";

export default function Home() {
    return <>
        <h2 className='container-fluid app-header'>Home</h2>
        <div className='container main-text'>
            <div className='row app-body'>
                <div className='column col-md-7'>
                    <p>Dungeons & Dragons (D&D) is a tabletop role-playing game (RPG) that was first published in 1974 by Gary
                        Gygax and Dave Arneson. It has since become one of the most popular and enduring RPGs in the world, with
                        the 5th edition, or 5e, being the most current version (as of September 2021).</p>
                    <p>In D&D, players assume the roles of characters in a fantasy world, such as wizards, warriors, rogues, or
                        clerics. One player, known as the Dungeon Master (DM), takes on the role of the storyteller and referee,
                        responsible for creating and narrating the world, as well as controlling non-player characters (NPCs)
                        and the game's challenges. The game is played using a combination of storytelling, dice rolling, and a
                        set of rules that govern character actions and interactions.</p>
                    <p>To play D&D, you'll need a few essential items:</p>
                    <ul>
                        <li>The Player's Handbook (PHB), which provides the rules and character creation guidelines</li>
                        <li>A set of polyhedral dice, including a 20-sided die (d20)</li>
                        <li>Character sheets (online or analog) for each player to record their character's information</li>
                        <li>An imagination ready to embark on epic adventures</li>
                    </ul>
                </div>
                <div className='column col-md-5'>
                    <img className='homeIMG' src="https://www.dndbeyond.com/attachments/3/289/brcover.jpg"
                        alt="Player's Handbook cover art"></img>
                </div>
                <div className='row'>
                    <div className='column col-lg '>
                        <p>During gameplay, the DM describes the world and presents challenges or scenarios for the players to
                            navigate. Players respond by describing their actions and rolling dice to determine the outcome of those
                            actions. The d20 is often used to resolve these actions, with modifiers from character abilities and
                            skills affecting the results. Combat, exploration, and role-playing interactions are all key components
                            of the game.</p>
                        <p>D&D is known for its flexibility and creativity, allowing players to craft unique stories and experiences
                            with each session. The game encourages collaboration, problem-solving, and immersive storytelling,
                            making it a social and imaginative experience that has captivated gamers for decades. Whether you're
                            battling dragons, solving mysteries, or negotiating with NPCs, Dungeons & Dragons offers endless
                            opportunities for adventure and excitement.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}