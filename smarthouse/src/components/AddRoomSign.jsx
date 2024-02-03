import React from 'react';
import { Link } from 'react-router-dom';
import {TiPlus} from 'react-icons/ti';

export default function AddRoomSign() {
  return (
    <div className='addroom' title='Add Room'>
        <Link to='/addroom'><TiPlus/></Link>
    </div>
  )
}
