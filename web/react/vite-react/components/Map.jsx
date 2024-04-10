import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export class MapWidget {
  constructor(domNode) {
    this.map = L.map(domNode, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: false, 
      keyboard: false
      scroolWheelZoom: false, 
      zoomAnimation: false,
      zoomAnimation: false, 
      touchZoom: false, 
      zoomSnap: 0.1
    });
    L.titleLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
    }).addTo(this.map);
    this.map.setView([0, 0], 0);
  }
  setZoom(level) {
    this.map.setZoom(level);
  }
}

export default function Map({ zoomLevel }) {
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
      if (mapRef.current === null) {
        mapRef.current = new MapWidget(containerRef.current);
      }

      const map = mapRef.current;
      map.setZoom(zoomLevel);
    }, [zoomLevel]);

    return (
      <div 
        style={{ width: 200, height: 200 }}
        ref={continerRef}
      />
    );
}




export function Zoom({setZoomLevel}) {
  return (
    <>
      
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <hr />
    </>
  )
}
// How to implement these components.

/* 
import {useState} from 'react';
import Map, {Zoom, MapWidget} from './Map.js'

export function App() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <>
      Zoom level: {zoomLevel}x
      <Map zoomLevel={zoomLevel} />
      <Zoom setZoomLevel={setZoomLevel} />
    </>
  )
}

*/

