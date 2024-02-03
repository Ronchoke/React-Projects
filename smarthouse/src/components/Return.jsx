import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';

export default function Return(props) {
  return (
    <div className='returnarrow'>
        <Link to={`${props.last}`}>
            <IoArrowUndoCircleOutline className='returnicon'/>
        </Link>
    </div>
  )
}
