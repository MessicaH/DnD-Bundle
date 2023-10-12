import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';
import "./DMRoster.css";
import {useState, useEffect} from 'react'

export default function DMRoster() {
    const API_URL = "https://64f42331932537f4051a219d.mockapi.io/players"
    const [players, setPlayers] = useState([{}])

    const [newPlayerPlayername, setNewPlayerPlayername] = useState('')
    const [newPlayerCharname, setNewPlayerCharname] = useState('')
    const [newPlayerCharclara, setNewPlayerCharclara] = useState('')
    const [newPlayerGroupname, setNewPlayerGroupname] = useState('')

    const [updatedPlayerPlayername, setUpdatedPlayerPlayername] = useState('')
    const [updatedPlayerCharname, setUpdatedPlayerCharname] = useState('')
    const [updatedPlayerCharclara, setUpdatedPlayerCharclara] = useState('')
    const [updatedPlayerGroupname, setUpdatedPlayerGroupname] = useState('')

    function getPlayers() {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setPlayers(data))
    }

    useEffect(() => {
        getPlayers()
        console.log(players)
    }, [])

    function deletePlayer(id) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
            .then(() => getPlayers())
    }

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

    function updatePlayer(event, playerObject) {
        event.preventDefault()

        let updatedPlayerObject = {
            ...playerObject,
            playername: updatedPlayerPlayername,
            charname: updatedPlayerCharname,
            charclara: updatedPlayerCharclara,
            groupname: updatedPlayerGroupname,
        }

        fetch(`${API_URL}/${playerObject.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedPlayerObject),
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(() => getPlayers())
    }

    // Use "players.json" to reset the MockAPI list ////////////////////////////////////

    return (
        <>
        <div className='container'>
            <div className='formSignUpDM'>
            <h2 className='appTitle'>DM - Group Management</h2>
                <div className='container formNewPlayer'>
                    <form>
                        <h3>Add a New Player <Icon.PersonPlusFill/></h3>
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
                        <label>Adventuring Group/Guild Name</label><br />
                        <input onChange={(event) => setNewPlayerGroupname(event.target.value)}
                            placeholder="Baldur's Greatest"></input>
                        <br />
                        <div className='btn-center'><button onClick={(event) => postNewPlayer(event)}
                            className='btn btn-primary'>Submit</button></div>
                    </form>
                </div>
                <div className='formSpacer'>.</div>
            </div>
            
            <div className="appTitle2"><h2>Alter Player Characteristics <Icon.Magic /></h2></div>

            {players.map((player, index) => (
                <div key={index} className='playerCard container formUpdateDM'>
                    <div className='playerInfo'>
                        <h3>Player Info <Icon.Journals/></h3>
                        <span className='playerLabel'>Player Name:</span><br />
                        <span className='playerDetails'>{player.playername}</span><br />
                        <span className='playerLabel'>Character Name:</span><br />
                        <span className='playerDetails'>{player.charname}</span><br />
                        <span className='playerLabel'>Character Race/Origin & Class:</span><br />
                        <span className='playerDetails'>{player.charclara}</span><br />
                        <span className='playerLabel'>Adventuring Group:</span><br />
                        <span className='playerDetails'>{player.groupname}</span><br />
                        <div className='btn'><button onClick={() => deletePlayer(player.id)} className='btn btn-danger'>
                            Remove Player <Icon.Trash3 /></button></div>
                    </div>
                    <form className='formUpdatePlayer'>
                        <h3>Change/Update Player Info <Icon.PersonGear /></h3>
                        <p>Be sure to copy all current info and submit with changes.</p>
                        <label>Player Name</label><br />
                        <input onChange={(event) => setUpdatedPlayerPlayername(event.target.value)}
                            placeholder={player.playername}></input>
                        <br />
                        <label>Character Name</label><br />
                        <input onChange={(event) => setUpdatedPlayerCharname(event.target.value)}
                            placeholder={player.charname}></input>
                        <br />
                        <label>Character Race/Origin & Class</label><br />
                        <input onChange={(event) => setUpdatedPlayerCharclara(event.target.value)}
                            placeholder={player.charclara}></input>
                        <br />
                        <label>Adventuring Group/Guild Name</label><br />
                        <input onChange={(event) => setUpdatedPlayerGroupname(event.target.value)}
                            placeholder={player.groupname}></input>
                        <br />
                        <div className='btn-right'><button onClick={(event) =>
                            updatePlayer(event, player)} className='btn btn-dark'>Update Info</button></div>
                    </form>
                </div>
            ))}
        </div>
        </>
    )
}