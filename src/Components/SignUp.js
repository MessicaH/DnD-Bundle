import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import {useState, useEffect} from 'react'
import "./SignUp.css";


export default function SignUp() {
    const API_URL = "https://64f42331932537f4051a219d.mockapi.io/players"
    const [players, setPlayers] = useState([{}])

    const [newPlayerPlayername, setNewPlayerPlayername] = useState('')
    const [newPlayerCharname, setNewPlayerCharname] = useState('')
    const [newPlayerCharclara, setNewPlayerCharclara] = useState('')
    const [newPlayerGroupname, setNewPlayerGroupname] = useState('')

    function getPlayers() {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setPlayers(data))
    }

    useEffect(() => {
        getPlayers()
        console.log(players)
    }, [])

    function postNewPlayer(event) {
        event.preventDefault()
        console.log("New Player Added: " + newPlayerPlayername, newPlayerCharname, newPlayerCharclara, newPlayerGroupname)
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                playername: newPlayerPlayername,
                charname: newPlayerCharname,
                charclara: newPlayerCharclara,
                groupname: newPlayerGroupname,
            })
        })
            .then(() => getPlayers())
    }
    
    return (
    <>
    <div>
    <h2 className='container-fluid app-header'>New Player - Sign Up form</h2>
    <p className='app-instructions'>When you are ready, you can add in your information for the Dungeon Master (DM)
        to review and add you to a new Adventuring Party.<br/>
        Be sure to include your own name, your Character name, and their Race/Origin and Class selections.<br/>
        Your DM will then contact you to let you know the Adventuring Group you are part of.</p>
        <div className='formCardBG'>
            <div className='container formSignUp'>
                <form>
                    <h3>Enter Your Details<Icon.PersonAdd/></h3>
                    <label>Player Name</label><br />
                    <input onChange={(event) => setNewPlayerPlayername(event.target.value)}
                        placeholder="Enter the player's name..."></input>
                    <br />
                    <label>Character Name</label><br />
                    <input onChange={(event) => setNewPlayerCharname(event.target.value)}
                        placeholder="Jackmerius Tacktheratrix"></input>
                    <br />
                    <label>Character Race/Origin & Class</label><br />
                    <input onChange={(event) => setNewPlayerCharclara(event.target.value)}
                        placeholder="Dwarf Barbarian, etc."></input>
                    <br />
                    <div className='btn-center'><button onClick={(event) => postNewPlayer(event)}
                        className='btn btn-primary'>Submit</button></div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}