import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
    return(
      <div id = "mapid">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{
                            height:"300px",
                            width: "300px"
                        }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
     ) };


const mapStateToProps = state => {

}


export default Map;

// if(props.searchedBreweries){
    //     return (
            
    //         <MapContainer center={[51.505, -0.09]}>
    //         <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //         {props.searchedBreweries.map(b => {
    //             if (b.longitude && b.latitude){
    //                 <Marker position={[b.latitude, b.longitude]} >
    //                 <Popup>{b.name}</Popup>
    //                 </Marker>
    //             }
    //         })}
    //         </MapContainer>
           
    //     )} else {
    //         return (
    //             <MapContainer center={[51.505, -0.09]}>
    //             <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
            
    //         </MapContainer>
            
    //     )}