import React from 'react';
import Return from './Return';
import AddRoomSign from './AddRoomSign';
import RoomTile from './RoomTile';
import { RoomsConsumer } from '../contextApi';
import '../styles/home.css';



export default function Home(props) {
    // Main Page Default View
    return (
        <div className='myhome'>
            <h1>Your Rooms</h1>
            
            <Return last='/'/>

            <AddRoomSign/>
          
            <div className='roomsflex'>
            <RoomsConsumer>
                {(val) => {
                    if (val.rooms.length === 0) {
                        // Initialise
                        return <h3>Press the Plus Sign to Add Rooms</h3>
                    }
                    // Create RoomTilt element
                    return val.rooms.map((room, index)=>{
                        return (
                            <RoomTile room={room} index={index} key={index.toString()} keyval={index.toString()}/>
                            )
                        })
                    }   
                }
            </RoomsConsumer>
            </div>
        </div>
    )
}