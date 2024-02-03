import React from 'react';
import { Link } from 'react-router-dom';
import {FaBed, FaBath} from 'react-icons/fa';
import {BiFridge} from 'react-icons/bi';

export default function RoomTile(props) {
    let room = props.room;

    const getIcon = (roomtype) => {
        // Sets a Room Icon Correlating to the Room Type
        switch (roomtype) {
            case 'bedroom':
                return <FaBed className='roomicon'/>;
            case 'bathroom':
                
                return <FaBath className='roomicon'/>;
            case 'kitchen':
                
                return <BiFridge className='roomicon'/>;
            default:
                return;
        }
    
    }

  return (
    <Link to={`/room${room.name}`} key={'link'+props.keyval}>
        <div className='houseroom' style={{'background':`${room.color}`}} key={'room'+ props.keyval}>
            <h3>{room.name}</h3>
            {getIcon(room.type)}
        </div>
    </Link>
  )
}
