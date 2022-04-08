import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/leaf-green.png';
import Orase from './orase/orase';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
const RefreshPage = ()=>{
  window.location.reload();
}
class Harta extends Component {
  state = {
    bacau: {
      lat: 46.66583,
      lng: 27.01121,
    },
    cluj: {
        lat: 46.87616,
        lng: 23.68370,
    },
    buc: {
      lat: 44.52685,
      lng: 26.20257, 
    },
    con: {
      lat: 44.27435,
      lng: 28.73603,
    },
    bv: {
      lat: 45.76640,
      lng: 25.70600,
    },
    tm: {
      lat: 45.85783,
      lng: 21.32635,
    },
    cv: {
      lat: 44.42456,
      lng: 23.89945,
    },
    is: {
      lat: 47.25994,
      lng: 27.69016,
    },
    od: {
      lat: 47.15768,
      lng: 22.03117,
    },
    sv: {
      lat: 47.76755,
      lng: 26.35137,
    },
    ta:{
      lat: 1,
      lng: 2,
    },
    ar: {
      lat: 46.41962,
      lng: 21.50746,
    },
    sb: {
      lat: 45.90072,
      lng: 24.25684,
    },
    zoom: 6
  }
  
  grenIcon = L.icon({
    iconUrl: leafGreen,
    iconSize:     [70], 
    iconAnchor:   [30, 30], 
    popupAnchor:  [-5, -20]
  });

    render() {
    
    const positionbacau = [this.state.bacau.lat, this.state.bacau.lng];
    const positioncluj = [this.state.cluj.lat, this.state.cluj.lng];
    const positionbuc = [this.state.buc.lat, this.state.buc.lng];
    const positioncon = [this.state.con.lat, this.state.con.lng];
    const positionbv = [this.state.bv.lat, this.state.bv.lng];
    const positiontm = [this.state.tm.lat, this.state.tm.lng];
    const positionis = [this.state.is.lat, this.state.is.lng];
    const positionod = [this.state.od.lat, this.state.od.lng];
    const positionsv = [this.state.sv.lat, this.state.sv.lng];
    const positionta = [this.state.ta.lat, this.state.ta.lng];
    const positionar = [this.state.ar.lat, this.state.ar.lng];
    const positionsb = [this.state.sb.lat, this.state.sb.lng];

    return (
      <Router>
        <Routes>
        <Route path="/bacau" element={<Orase loc={"Bacau"}/>} />
        <Route path="/cluj" element={<Orase loc={"Cluj"}/>} />
        <Route path="/buc" element={<Orase loc={"Bucuresti"}/>} />
        <Route path="/con" element={<Orase loc={"Constanta"}/>} />
        <Route path="/bv" element={<Orase loc={"Brasov"}/>} />
        <Route path="/tm" element={<Orase loc={"Timisoara"}/>} />
        <Route path="/cv" element={<Orase loc={"Craiova"}/>} />
        <Route path="/is" element={<Orase loc={"Iasi"}/>} />
        <Route path="/od" element={<Orase loc={"Oradea"}/>} />
        <Route path="/sv" element={<Orase loc={"Suceava"}/>} />
        <Route path="/ch" element={<Orase loc={"Chisinau"}/>} />
        <Route path="/ta" element={<Orase loc={"Targu"}/>} />
        <Route path="/ar" element={<Orase loc={"Arad"}/>} />
        <Route path="/sb" element={<Orase loc={"Sibiu"}/>} />

        <Route path='/' element={ 
        <div className='container'>
        <MapContainer className="map" center={positionbv} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        
          <Marker position={positionbacau} icon={this.grenIcon}>
            <Popup>
              <li><Link to='/bacau' onClick={<RefreshPage />}>Bacau</Link></li>
            </Popup>
          </Marker>

          <Marker position={positioncluj} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/cluj' onClick={<RefreshPage />}>Cluj-Napoca</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionbuc} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/buc' onClick={<RefreshPage />}>Bucuresti</Link></li>
            </Popup>
          </Marker>

          <Marker position={positioncon} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/con' onClick={<RefreshPage />}>Constanta</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionbv} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/bv' onClick={<RefreshPage />}>Brasov</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionis} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/is' onClick={<RefreshPage />}>Iasi</Link></li>
            </Popup>
          </Marker>

          <Marker position={positiontm} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/tm' onClick={<RefreshPage />}>Timisoara</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionod} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/od' onClick={<RefreshPage />}>Oradea</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionsv} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/sv' onClick={<RefreshPage />}>Suceava</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionar} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/ar' onClick={<RefreshPage />}>Arad</Link></li>
            </Popup>
          </Marker>

          <Marker position={positionsb} icon={this.grenIcon}>
            <Popup>
            <li><Link to='/sb' onClick={<RefreshPage />}>Sibiu</Link></li>
            </Popup>
          </Marker>

        </MapContainer>
        </div>
        } />
        </Routes>
      </Router>
    );
    }
}

export default Harta;
