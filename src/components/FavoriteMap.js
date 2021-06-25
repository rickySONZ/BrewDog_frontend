import { connect, useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React from 'react'

const FavoriteMap = () => {

    const dispatch = useDispatch()
   
    const favorites = useSelector(state => state.favoritesR.favorites)
    const breweries = useSelector(state => state.breweriesR.breweries)

    let favoriteBreweries = {
       
    }
    return (
        <div id="favmapid">
            <MapContainer center={[39.809860, -96.555183]} zoom={4} scrollWheelZoom={false} style={{
                      height:"650px",
                      width: "900px",
                      float: "right"
                  }}>
                      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {favorites.map((f, i) => {
            
            
            if (f.brewery.longitude && f.brewery.latitude){
              return (
                   <Marker key={f.brewery.uid + i} position={[f.brewery.latitude, f.brewery.longitude]} >
                   <Popup>{f.brewery.name}</Popup>
                 </Marker>)
            }})}   

                  </MapContainer>
        </div>
    );
}

export default connect(null)(FavoriteMap);
