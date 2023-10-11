import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./Charace.css";
import Button from 'react-bootstrap/esm/Button';

export default function Charace() {
    return <>
        <h2 className='container-fluid app-header'>Character Races (Origins)</h2>
        <div className='container'>
            <div className='app-body'>
            <p>In Dungeons & Dragons, Races (origins) represent the various humanoid species that inhabit the fantasy worlds of the game.
                These encompass a wide range of creatures, from classic fantasy races like Humans, Elves, Dwarves, and Halflings
                to more exotic options such as Dragonborn, Tieflings, and Gnomes. We will only be covering the core Races here per the 
                Player's Handbook.</p>
            <p>Each race comes with unique traits and Abilities, such as enhanced senses, magical abilities, or cultural
                characteristics, which influence a character's abilities, appearance, and status in the game's world.
                Players choose a race for their character during character creation. This choice often shapes their character's
                background and role within the party and the broader narrative of the campaign.</p>
            </div>
            <div>
                <details>
                    <summary className='abilityDropdown'>Open for more information on Abilities and their meanings.</summary>
                    <div className='row abilityTable'>
                        <div className='column col-lg-6'>
                            <h4 className='appTitle2'>Ability score definitions:</h4>
                            <ol>
                                <li><b>Charisma</b> (CHA) - Being able to bluff, flirt, lie, and love with anyone/thing</li>
                                <li><b>Constitution</b> (CON)- Endurance, how strong is your mind or stomach</li>
                                <li><b>Dexterity</b> (DEX) - Agility, cat-like reflexes, slight-of-hand</li>
                                <li><b>Intelligence</b> (INT) - Reasoning and memory, logic and rationale</li>
                                <li><b>Strength</b> (STR) - Physical power or muscle-y might</li>
                                <li><b>Wisdom</b> (WIS) - Perception, insight, intuitiveness of others</li>
                            </ol>
                        </div>
                        <div className='column col-md-5'>
                            <img className='abilityIMG' src="https://olddungeonmaster.files.wordpress.com/2017/04/abilities-tomato.jpg"
                                alt=" Picture of tomato with the following text:
                        Strength is being able to crush a tomato.
                        Dexterity is being able to dodge a tomato.
                        Constitution is being able to eat a bad tomato.
                        Intelligence is knowing a tomato is a fruit.
                        Wisdom is knowing not to put a tomato in a fruit salad.
                        Charisma is being able to sell a tomato based fruit salad."></img>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        <div className='container card-deck charSection'>
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/340/420/618/636272677995471928.png" 
                alt="Dragonborn with staff and hand weapon"></img>
                <div className='card-header charTitle'>
                    <h3>Dragonborn</h3>
                </div>
                <div className='card-body'>
                    <p>Shaped by draconic gods or the dragons themselves, Dragonborn originally hatched from dragon eggs 
                        as a unique race, combining the best attributes of Dragons and humanoids.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Strength (STR), +1 Charisma (CHA)
                    <br/>Draconic Ancestry
                    <br/>Breath Weapon, Damage Resistance</p>
                    <a href="https://www.dndbeyond.com/races/16-dragonborn" class="btn btn-primary">More info</a>
                </div>
            </div>

            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png" 
                alt="Dwarf with red hair and hammer"></img>
                <div className='card-header charTitle'>
                    <h3>Dwarf</h3>
                </div>
                <div className='card-body'>
                    <p>Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance 
                        and little change.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Constitution (CON), Darkvision, Dwarven Resilience
                    <br/>Dwarven Combat Training, Stonecutting</p>
                    <a href="https://www.dndbeyond.com/races/13-dwarf" class="btn btn-primary">More info</a>
                </div>
            </div>

            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/7/639/420/618/636287075350739045.png" 
                alt="Elf casting a spell"></img>
                <div className='card-header charTitle'>
                    <h3>Elf</h3>
                </div>
                <div className='card-body'>
                    <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They love 
                        nature, magic, art, music, poetry, and the good things of the world.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 on Dexterity (DEX) rolls, Darkvision
                    <br/>Keen Senses, Fey Ancestry, Trance</p>
                    <a href="https://www.dndbeyond.com/races/3-elf" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/334/420/618/636272671553055253.png" 
                alt="Gnome with bow and arrow"></img>
                <div className='card-header charTitle'>
                    <h3>Gnome</h3>
                </div>
                <div className='card-body'>
                    <p>A constant hum of busy activity pervades the warrens and neighborhoods where Gnomes form their 
                        close-knit communities. They take delight in life, enjoying every moment of invention, 
                        exploration, investigation, creation, and play.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Intelligence (INT), Darkvision
                    <br/>Gnome Cunning</p>
                    <a href="https://www.dndbeyond.com/races/18-gnome" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/481/420/618/636274618102950794.png" 
                alt="Half-Elf conjuring a spell"></img>
                <div className='card-header charTitle'>
                    <h3>Half-Elf</h3>
                </div>
                <div className='card-body'>
                    <p>Walking in two worlds but truly belonging to neither, Half-Elves combine what some say are the best qualities 
                        of their Elf and Human parents: Human curiosity, inventiveness, and ambition tempered by the refined senses, 
                        love of nature, and artistic tastes of the Elves.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Charisma (CHA), +1 to two (2) other Ability Scores, Darkvision
                    <br/>Fey Ancestry, Skill Versatility</p>
                    <a href="https://www.dndbeyond.com/races/20-half-elf" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/256/420/618/636271789409776659.png" 
                alt="Halfling playing a lute"></img>
                <div className='card-header charTitle'>
                    <h3>Halfling</h3>
                </div>
                <div className='card-body'>
                    <p>The comforts of home are the goals of most Halflings’ lives: a place to settle in peace and quiet, far from marauding 
                        monsters and clashing armies; a blazing fire and a generous meal; fine drink and conversation. </p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Dexterity (DEX), Lucky, Brave
                    <br/>Halfling Nimbleness</p>
                    <a href="https://www.dndbeyond.com/races/14-halfling" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/466/420/618/636274570630462055.png" 
                alt="Half-Orc with hammer at the ready"></img>
                <div className='card-header charTitle'>
                    <h3>Half-Orc</h3>
                </div>
                <div className='card-body'>
                    <p>Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, 
                        Orc and Human communities sometimes form alliances. When these alliances are sealed by marriages, Half-Orcs are 
                        born.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Strength (STR), +1 Constitution (CON), Darkvision
                    <br/>Menacing, Relentless Endurance, Savage Attacks</p>
                    <a href="https://www.dndbeyond.com/races/2-half-orc" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png" 
                alt="Human in armor with a book"></img>
                <div className='card-header charTitle'>
                    <h3>Human</h3>
                </div>
                <div className='card-body'>
                    <p>In the reckonings of most worlds, Humans are the youngest of the common races, late to arrive on the world scene and 
                        short-lived in comparison to Dwarves, Elves, and Dragons. Whatever drives them, Humans are the innovators, the 
                        achievers, and the pioneers of the worlds.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+1 to all Ability Scores
                    <br/>Extra Language</p>
                    <a href="https://www.dndbeyond.com/races/1-human" class="btn btn-primary">More info</a>
                </div>
            </div>
            
            <div className="card text-center charCard">
                <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png" 
                alt="Tiefling in power stance with glowing hands"></img>
                <div className='card-header charTitle'>
                    <h3>Tiefling</h3>
                </div>
                <div className='card-body'>
                    <p>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in 
                        every eye: this is the lot of the Tiefling. Their horned appearance and nature are not their fault but the result 
                        of an ancient sin, for which they and their descendants will always be held accountable.</p>
                    <h5 className='card-title'>Ability Bonuses</h5>
                    <p>+2 Charisma (CHA), +1 Intelligence (INT), Darkvision
                    <br/>Hellish Resistance, Infernal Legacy</p>
                    <a href="https://www.dndbeyond.com/races/7-tiefling" class="btn btn-primary">More info</a>
                </div>
            </div>
            
        </div>
</>
}