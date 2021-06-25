import { connect, useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useEffect } from 'react'
import { getFavorites } from '../actions/favorite';

const FavoriteMap = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavorites())
        return () => {
            
        };
    }, []);
   
    const favorites = useSelector(state => state.favoritesR.favorites)
    const breweries = useSelector(state => state.breweriesR.breweries)

    return (
        <div id="favmapid">
            <MapContainer center={[39.809860, -96.555183]} zoom={4} scrollWheelZoom={false} style={{
                      height:"650px",
                      width: "900px"
                  }}>
                      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {favorites.map((f, i) => {
            
            
            if (f.brewery && f.brewery.longitude && f.brewery.latitude){
              return (
                   <Marker key={f.brewery.uid + i} position={[f.brewery.latitude, f.brewery.longitude]} >
                   <Popup>{f.brewery.name}</Popup>
                 </Marker>)
            } else if (breweries.find(b => b.id === f.brewery_id)){
                let fb = breweries.find(b => b.id === f.brewery_id)
                return (
                   <Marker key={fb.uid + i} position={[fb.latitude, fb.longitude]} >
                   <Popup>{fb.name}</Popup>
                 </Marker>)
            }})}   

                  </MapContainer>
        </div>
    );
}

export default connect(null)(FavoriteMap);
