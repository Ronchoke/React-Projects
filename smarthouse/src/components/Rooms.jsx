import React, { useState } from "react";
import { FaRegHandPointUp } from 'react-icons/fa';
import Return from "./Return";
import AddAppliance from "./AddAppliance";
import Appliance from "./Appliance";
import '../styles/rooms.css';


export default function Rooms(props) {
    
    // Define States
    const [clicks, setClicks] = useState(0);
    const [thisRoom, setRoom] = useState(props.roomObj);

    const addClick = () => {
        // Promote clicked state
        setClicks(clicks + 1);
    }

    const updateApplianceStatus = (appliance, index) => {
        // This Updates the Room appliance status and
        let updatedroom = thisRoom;
        updatedroom.appliances[index] = appliance;
        setRoom(updatedroom);
        props.updateRooms(thisRoom, props.index);
    }

    const showAppliances = () => {
        // Creates Appliance Components in Room
        if (props.roomObj.appliances.length === 0) {
            return <div><FaRegHandPointUp/><h3>Add an Appliance to the Room </h3></div>
        }
        return props.roomObj.appliances.map((appliance, index)=>{
            return (
                <Appliance appliance={appliance} index={index} updateroom={updateApplianceStatus} key={index}/>
            )
        })
    }

    const openAddAppliance = () => {
        /*This will open a section like "show more" 
        and allow to insert a new Applience object into Room Object apliances list*/
        if (clicks%2 !== 0) {
            // Open add appliance div
            return <AddAppliance index={props.index} addClick={addClick}/>
        } else {
            return <button onClick={addClick} className="add-feature-button">+ Add Appliance</button>
        }
    }

    return (
        <div className="roompage">
            <Return last='/'/>
            <h2>Room: {thisRoom.name}</h2>
            <h2>Type: {thisRoom.type[0].toUpperCase() + thisRoom.type.slice(1)}</h2>
            
            <div className="addappliance">
                {openAddAppliance()}
            </div>

            <div className="appliances">
                {showAppliances()}
            </div>
        </div>
    )
}