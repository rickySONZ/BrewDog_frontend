import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = (props) => {


 if(props.searchedBreweries){
   
    return(
      <div id = "mapid">
    <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false} style={{
                            height:"500px",
                            width: "500px",
                            float: 'right'
                        }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  
            {props.searchedBreweries.map((b, i) => {
            
              if (b.longitude && b.latitude){
                return (
                     <Marker key={b.uid + i} position={[b.latitude, b.longitude]} >
                     <Popup>{b.name}</Popup>
                   </Marker>)
              }
             })}
            
  </MapContainer>
        </div>
     ) } else {
                   return (
                <MapContainer center={[51.505, -0.09]}>
                <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
            
            </MapContainer>
            
                   )}};


const mapStateToProps = state => {
  return({
    searchedBreweries: state.breweriesR.searchedBreweries
  })
}



export default connect(mapStateToProps)(Map);

