import React, { useState } from "react";
import { Appliance } from "../App";
import { RoomsConsumer } from "../contextApi";
import '../styles/addappliance.css';

export default function AddAppliance(props){
    
    // Define States
    const [applianceType, setApplianceType] = useState('----');

    const checkBathroom = (thisroom) => {
        // Check Room Type and Return boiler appliance option if it's a bathroom
        if (thisroom.type === 'bathroom') {
            return <option>Boiler</option>
        }
        return ''
    }

    const createAppliance = (val) => {
        // Create a new Appliance instance into required room and update data
        let allrooms = val.rooms;
        let thisroom = val.rooms[props.index];
        if (applianceType !== '----') {
            if (thisroom.appliances.length < 5) {
                let newappliance = new Appliance(applianceType);
                thisroom.appliances.push(newappliance);
                allrooms[props.index] = thisroom;
                alert('Appliance added!');
                props.addClick();
                val.updateRooms(allrooms);

            } else {
                alert('Error: Could not add Appliance');
            }
        }
    }

    return (
        <div>
            <RoomsConsumer>
                {(val)=>{return (
                    <div className="opened-addappliance">
                        <button className='add-feature-button add-appliance-button close-add-appliance' onClick={props.addClick}> x </button>
                        <select className='select-menu' name='select-appliance' onChange={(e)=>{setApplianceType(e.target.value)}}>
                            <option>----</option>
                            <option>Air Condition</option>
                            <option>Light</option>
                            <option>Sound</option>
                            {checkBathroom(val.rooms[props.index])}
                        </select>
                        <button className='add-feature-button add-appliance-button' onClick={()=>{createAppliance(val)}}>Add</button>
                    </div>
                )}}

            </RoomsConsumer>
            
        </div>
    )
}