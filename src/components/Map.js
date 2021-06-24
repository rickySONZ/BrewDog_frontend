import React, { useEffect, useDispatch, useSelector } from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = (props) => {
// const dispatch = useDispatch()

  useEffect(() => {

    return () => {
      
    };
  }, []);

 if(props.searchedBreweries[0]){
   console.log(props.searchedBreweries[0])
    return(
      <div id = "mapid">
    <MapContainer center={[props.searchedBreweries[0].latitude, props.searchedBreweries[0].longitude]} zoom={12} scrollWheelZoom={false} style={{
                            height:"500px",
                            width: "700px",
                            float: 'right'
                        }}>
                        <ChangeView center={[props.searchedBreweries[0].latitude, props.searchedBreweries[0].longitude]} />
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
                    <MapContainer center={[39.809860, -96.555183]} zoom={4} scrollWheelZoom={false} style={{
                      height:"500px",
                      width: "700px",
                      float: 'right'
                  }}>
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

