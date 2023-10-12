import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./Charclass.css";

export default function Charclass() {
    return <>
        <h2 className='container-fluid app-header'>Character Classes</h2>
        <div className='container'>
            <div className='app-body'>
                <p>In Dungeons & Dragons, classes define a character's profession, skills, and abilities, shaping their role
                    within the adventuring party. There is a diverse array of classes to choose from, each with its own unique
                    features and playstyle. For example, Wizards are masters of arcane magic, capable of casting powerful spells,
                    while Fighters excel in combat and m prowess, and Rogues are skilled in stealth and subterfuge. We will only 
                    be covering the twelve core Classes here per the Player's Handbook.</p>
                <p>Each Class has a specific Hit Point (HP) number that a player will start with. This determines how long they can
                    engage in and last during encounters (i.e. when you meet and must fight enemies). Typically, this is the same 
                    number that corresponds to the particular numbered-die (d4, d6, d8, d10, d12, etc.) listed for their Hit Dice.
                    For example, as a Bard, you start with 8 points + your Constitution (CON) modifier (1-6) and when
                    you level up, you roll a d8 to see how many more HPs you get to add.</p>
                <p>Classes provide a framework for character development, determining a character's hit points, combat skills,
                    spellcasting ability (if applicable), and special abilities gained as they level up.
                    Players select a class for their character during character creation, and their choice deeply
                    influences their character's capabilities and profession or role in the group, contributing to the richness
                    and diversity of storytelling and gameplay experiences in D&D.</p>
            </div>
            <div>
                <details>
                    <summary className='abilityDropdown'>Open to read more about Class selections</summary>
                    <div className='card'>
                        <p className='app-body'>Classes also determine which types of armor, weapon, and tools your character will be proficient at using. This
                    often gives your character specific or restricted access to particular options for protection and fighting in the titular dungeons of the game. 
                    For example, some Classes cannot wield iron or metal weapons so their skill sets focus elsewhere or on a different type of weapon.<br/>
                    <br/>Your character's proficiency in certain Skills will also be determined by which Class you select. Your character 
                    will have some "knowledge" of all Skills available, but they are proficient in specific ones for their Class. 
                    These can enhance the backstory (i.e. character origin story or narrative) in how they determine why a character 
                    has a particular set of Skills. This is where storytelling and roleplay become a big part of the game.</p>
                    </div>

                </details>
            </div>

            <div className='charSection'>
                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png"
                        alt="Barbarian standing with a broadaxe"></img>
                    <div className='card-header charTitle'>
                        <h3>Barbarian</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d12<br /><span className='charDetails'>
                            Add 1-12 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Strength (STR) and Constitution (CON)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Light and medium armor, Shields, Simple and martial weapons
                            <br />Choose two from Animal Handling, Intimidation, Nature, Perception, and Survival</p>
                        <a href="https://www.dndbeyond.com/classes/barbarian" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/369/420/618/636272705936709430.png" 
                    alt="Bard walking with a lute and a decorative satchel"></img>
                    <div className='card-header charTitle'>
                        <h3>Bard</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Dexterity (DEX) and Charisma (CHA)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Light armor, Simple weapons, Hand crossbows, Longswords, Rapiers, and Shortswords
                            <br />Choose any three Skills</p>
                        <a href="https://www.dndbeyond.com/classes/bard" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png"
                     alt="Cleric dwarf standing with a hammer"></img>
                    <div className='card-header charTitle'>
                        <h3>Cleric</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Wisdom (WIS) and Charisma (CHA)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Light and medium armor, Shields
                            <br />Choose two from History, Insight, Medicine, Persuasion, and Religion</p>
                        <a href="https://www.dndbeyond.com/classes/cleric" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/346/420/618/636272691461725405.png" 
                    alt="Druid standing with falcon and staff"></img>
                    <div className='card-header charTitle'>
                        <h3>Druid</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Intelligence (INT) and Wisdom (WIS)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Light and medium armor, Shields <i>(No metal)</i>
                        <br/>Clubs, daggers, darts, javelins, maces, staffs, scimitars, sickles, slings, and spears
                        <br/>Herbalism kit
                            <br />Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival</p>
                        <a href="https://www.dndbeyond.com/classes/druid" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png" 
                    alt="Fighter standing with a shield, staff, and sword"></img>
                    <div className='card-header charTitle'>
                        <h3>Fighter</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d10<br /><span className='charDetails'>
                            Add 1-10 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Strength (STR) and Constitution (CON)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Simple and martial weapons
                            <br />Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival</p>
                        <a href="https://www.dndbeyond.com/classes/fighter" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/489/420/618/636274646181411106.png" 
                    alt="Monk generating a ball of light with their hands"></img>
                    <div className='card-header charTitle'>
                        <h3>Monk</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Strength (STR) and Dexterity (DEX)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Simple weapons and Shortswords
                            <br />Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth</p>
                        <a href="https://www.dndbeyond.com/classes/monk" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/365/420/618/636272701937419552.png" 
                    alt="A Paladin shouting with a broadsword and shield at the ready"></img>
                    <div className='card-header charTitle'>
                        <h3>Paladin</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d10<br /><span className='charDetails'>
                            Add 1-10 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Wisdom (WIS) and Charisma (CHA)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Simple and martial weapons
                            <br />Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion</p>
                        <a href="https://www.dndbeyond.com/classes/paladin" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/367/420/618/636272702826438096.png" 
                    alt="A Ranger standing with a bow and arrow"></img>
                    <div className='card-header charTitle'>
                        <h3>Ranger</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d10<br /><span className='charDetails'>
                            Add 1-10 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Strenght (STR) and Dexterity (DEX)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Simple and martial weapons
                            <br />Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival</p>
                        <a href="https://www.dndbeyond.com/classes/ranger" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png" 
                    alt="A shadowed Rogue crouches with two curved daggers at the ready"></img>
                    <div className='card-header charTitle'>
                        <h3>Rogue</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Dexterity (DEX) and Intelligence (INT)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Simple weapons, Hand crossbows, Longswords, Rapiers, and Shortswords
                            <br />Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth</p>
                        <a href="https://www.dndbeyond.com/classes/rogue" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png" 
                    alt="A swirl of light or fire surrounds a conjuring Sorcerer"></img>
                    <div className='card-header charTitle'>
                        <h3>Sorcerer</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d6<br /><span className='charDetails'>
                            Add 1-6 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Constitution (CON) and Charisma (CHA)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Daggers, darts, slings, quarterstaffs, and light crossbows
                            <br />Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion</p>
                        <a href="https://www.dndbeyond.com/classes/sorcerer" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/375/420/618/636272708661726603.png" 
                    alt="White-eyed Warlock walking with a staff and carrying large metal medallion or emblem"></img>
                    <div className='card-header charTitle'>
                        <h3>Warlock</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d8<br /><span className='charDetails'>
                            Add 1-8 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Wisdom (WIS) and Charisma (CHA)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Light armor, Simple weapons
                            <br />Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion</p>
                        <a href="https://www.dndbeyond.com/classes/warlock" class="btn btn-primary">More info</a>
                    </div>
                </div>

                <div className="card text-center charCard">
                    <img class="card-img-top charIMG" src="https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png" 
                    alt="A Wizard leans on their walking staff and has a decorative satchel and carrying pouch for scrolls"></img>
                    <div className='card-header charTitle'>
                        <h3>Wizard</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-header'>Hit Dice</h5>
                        <p className='card-text'>d6<br /><span className='charDetails'>
                            Add 1-6 more Hit Points (HP) per Level</span></p>
                        <h5 className='card-header'>Saving Throws</h5>
                        <p className='card-text'><span className='charDetails'>Resistance to attacks on:</span>
                            <br />Intelligence (INT) and Wisdom (WIS)</p>
                        <h5 className='card-header'>Proficiencies & Skills</h5>
                        <p className='card-text'>Daggers, darts, slings, quarterstaffs, and light crossbows
                            <br />Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion</p>
                        <a href="https://www.dndbeyond.com/classes/wizard" class="btn btn-primary">More info</a>
                    </div>
                </div>

            </div>

        </div>
    </>
}