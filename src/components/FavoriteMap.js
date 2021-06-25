import { connect, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const FavoriteMap = () => {

    const dispatch = useDispatch()
    const breweries = useSelector(state => state.breweriesR.breweries)
    const favorites = useSelector(state => state.favoritesR.favorites)

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
      {favorites.map((b, i) => {
            
            if (b.longitude && b.latitude){
              return (
                   <Marker key={b.uid + i} position={[b.latitude, b.longitude]} >
                   <Popup>{b.name}</Popup>
                 </Marker>)
            }})}   

                  </MapContainer>
        </div>
    );
}

export default connect(null)(FavoriteMap);
