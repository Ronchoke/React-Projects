import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoomsProvider } from './contextApi';
import Header from './components/Header';
import Home from './components/Home';
import Rooms from './components/Rooms';
import AddRoom from './components/AddRoom';

/**
 Notes:
  the Room and Appliance classes methods weren't passed with the class instances on use within components.
  couldn't figure this out. 'TypeError: this.method is not a function' arosed, yet couldn't find anything on the web.
  In the end used indexes though it is bad practice and if this app was to be broadend with remove\delete room or appliance, 
  a Unique key would be used. this.__id was implemented within classes constructors for this purpose.
 */
function App() {
  const [rooms, setRooms] = useState([]); 
  
  const updateRooms=(newrooms)=>{
    // Update State and Client's Storage data
    setRooms(newrooms);
    localStorage.setItem('House', JSON.stringify(newrooms));
  }

  const updateARoom = (room, index) => {
    // Re-insert the Updated room into rooms array
    let newrooms = rooms;
    newrooms[index] = room;
    updateRooms(newrooms);
  }

  const checkStorage = () => {
    // This is for Refreshing Page
    let myhouse = JSON.parse(localStorage.getItem('House'));
    if (myhouse !== null) {
      setRooms(myhouse);
    } 
  }


  const generateRoutes = () => {
    // Create Route element for each room
    if (rooms.length === 0) {
      checkStorage();
    }
    return rooms.map((val, index)=>{
      const roomkey = 'RoomComponent'+ toString(index); //= val.getId();
      return (
        <Route key={roomkey} path={`/room${val.name}`} element={<Rooms roomObj={val} index={index} updateRooms={updateARoom}/>}/>
      )
  })
  }

  return (
    <div className="App">
      <Header/>
      
      <RoomsProvider value={{rooms: rooms, setRooms, updateRooms}}>
      <div className='main-router'>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/addroom'} element={<AddRoom/>}/>
            {generateRoutes()}
          </Routes>
        </BrowserRouter>
        </div>
      </RoomsProvider>
      
    </div>
  );
}

export default App;

// Define House Rooms Class
export class Room {
  constructor(name, color, type) {
    this.name = name[0].toUpperCase() + name.slice(1);
    this.color = color;
    this.type = type;
    this.__id = new Date().getTime();
    this.appliances = [];
  }

  addAppliance (applianceObject) {
    if (this.appliances.length < 5) {
      this.appliances.push(applianceObject);
      return true
    }
    return false
  }

  getId () {
    return this.__id;
  }
}

// Define Appliance Class
export class Appliance {
  constructor(type) {
    this.type = type;
    this.onoff = false;
    this.__id = new Date().getTime();
  }

  switchStatus() {
    this.onoff = !this.onoff;
    return this.onoff;
  }
}