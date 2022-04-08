import React, {Component} from 'react';
import Fest from './components/festivale/Fest';
import Harta from './components/harta/harta';
import "leaflet/dist/leaflet.css";
import Sidebar from './components/Sidebar/sidebar';
import Inceput from './components/inceput/inceput';
import './App.scss'

class Home extends Component {
  render () {
  return (
      <div>
      <header></header>
      <Sidebar />
      <Inceput />
      <Harta />
      <Fest />
      <footer>Copyright &copy; 2022</footer>
      </div>
  )
}
}
export default Home
