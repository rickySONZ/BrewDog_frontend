import React from 'react';
import { connect, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useMediaPredicate } from 'react-media-hook';

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom = 11);
  return null;
}

const Map = () => {

  let searchedBreweries = useSelector(state => state.breweriesR.searchedBreweries)

 if(searchedBreweries[0]){
    return(
      <div id = "mapid">
    <MapContainer center={[searchedBreweries[0].latitude, searchedBreweries[0].longitude]} zoom={11} scrollWheelZoom={false} style={{
                            height:"500px",
                            width: "700px"
                      
                        }}>
                        <ChangeView center={[searchedBreweries[0].latitude, searchedBreweries[0].longitude]} />
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            {searchedBreweries.map((b, i) => {
            
              if (b.longitude && b.latitude){
                return (
                     <Marker key={b.uid + i} position={[b.latitude, b.longitude]} >
                     <Popup>{b.name}</Popup>
                   </Marker>)
              }})}         
  </MapContainer>
        </div>) 
        } else {
            return (
              <div id="mapid">
             <MapContainer center={[39.809860, -96.555183]} zoom={4} scrollWheelZoom={false} style={{
                      height:"75%",
                      width: "95%"
                  }}>
                <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
            
            </MapContainer>
            </div>
                   )}};




export default connect(null)(Map);

