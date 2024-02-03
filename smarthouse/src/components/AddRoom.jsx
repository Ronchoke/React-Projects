import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { RoomsConsumer } from '../contextApi';
import { Room } from '../App';
import Return from './Return';
import '../styles/addroom.css';

export default function AddRoom() {
    
    // Define States
    const [roomType, setRoomType] = useState('none');
    const [roomName, setRoomName] = useState('');
    const [roomColor, setRoomColor] = useState('#ffffff');

    // Create Navigator Hook
    const nav = useNavigate();

    const createRoom = (val) => {
        // Create Room after Validation
        let msg = '';
        if (roomType === 'none') {
            msg = 'Room type must be chosen\n';
        }

        if (roomName.length < 1 || roomName.length > 5) {
            msg = msg + 'Room name must contain up to 5 characters!';
        }

        if (msg !== '') {
            alert(msg);
        } else {
            let newroom = new Room(roomName, roomColor, roomType);
            // Define new value for rooms
            let newrooms = [...val.rooms, newroom];
            // Pass the new required State
            val.updateRooms(newrooms);
            alert('Room Added Succesfully!');
        }

        return (
            nav('/')
        );
    }

  return (
    <div>
        <h2>AddRoom</h2>
        <Return last='/'/>
        <RoomsConsumer>
            {(val)=>{
                return (
                    <div className='add-room'>
                        <select className='select-menu room-type' name='roomselect' onChange={(e)=>{setRoomType(e.target.value)}}>
                            <option value='none'>-----</option>
                            <option value='bedroom'>Bedroom</option>
                            <option value='bathroom'>Bathroom\Toilet</option>
                            <option value='kitchen'>Kitchen</option>
                        </select>
                        <input type='text' name='roomname' placeholder='Enter Room Name' onChange={(e)=>{setRoomName(e.target.value)}}/>
                        <label className='font-arial'>Choose Room Color: <input className='roomcolorpicker' type='color' name='roomcolor' value={roomColor} onChange={(e)=>{setRoomColor(e.target.value)}}/></label>
                        <button className='add-feature-button' onClick={()=>{createRoom(val)}}> + Add Room</button>
                    </div>
                )
            }}
            
        </RoomsConsumer>
    </div>
  )
}
