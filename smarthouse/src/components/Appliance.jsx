import React from 'react'
import { useState } from 'react';
import { TbAirConditioning, TbAirConditioningDisabled } from 'react-icons/tb';
import { CgSmartHomeBoiler } from 'react-icons/cg';
// import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';
import { RiSurroundSoundFill, RiSurroundSoundLine } from 'react-icons/ri';
import '../styles/appliance.css';

export default function Appliance(props) {
    let appliance = props.appliance;
    let on = {turned:'ON', bkgcolor: 'mediumseagreen', border: '3px solid green'};
    let off = {turned:'OFF', bkgcolor: 'indianred', border: '3px solid red'}

    const [setting, setSetting] = useState(()=>{
        if (appliance.onoff) {
            return on;
        } else {
            return off;
          }
    });

    const flipswitch = ()=> {
        // appliance.switchStatus();
        appliance.onoff = !appliance.onoff;
        if (appliance.onoff) {
            setSetting(on);
        } else {
            setSetting(off);
          }
        props.updateroom(appliance, props.index);
    }

    const getIcon = () => {
        switch (appliance.type) {
            case 'Air Condition':
                if (appliance.onoff) {
                    return <TbAirConditioning className='appIcon'/>
                } 
                return <TbAirConditioningDisabled className='appIcon'/>;
            case 'Light':
                if (appliance.onoff) {
                    return <MdLightbulbOutline className='appIcon'/>
                } 
                return <MdLightbulb className='appIcon'/>;
            case 'Sound':
                if (appliance.onoff) {
                    return <RiSurroundSoundLine className='appIcon'/>
                } 
                return <RiSurroundSoundFill className='appIcon'/>;
            case 'Boiler':
                return <CgSmartHomeBoiler className='appIcon'/>;
            
            default:
                return;
        }
    }

  return (
    <div onClick={flipswitch} style={{background: setting.bkgcolor, border: setting.border}} className="appliance">
        {getIcon(appliance.type)}<h3 className='applianceName'>{appliance.type}</h3>
        <h4 className='switch' >{setting.turned}</h4>
    </div>
  )
}
