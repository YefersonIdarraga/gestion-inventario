import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import axios from 'axios'
import useSwr from 'swr'
import './mapInv.css'

const fetcher = (...args) => fetch(...args).then(response => response.json())

const icon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4452/4452042.png",
  iconSize: [25, 25]
})

const MapInv = () => {

  const url = "http://localhost:3000/products"
  const { data, error } = useSwr(url, fetcher)
  console.log(data)
  const products = data && !error ? data.slice(0,100) : [];

  return (
    <section className='map-container'>
        <MapContainer center={[6.230833, -75.590553]} zoom={12}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {products.map(product => <Marker key={product.id} position={[product.location.latitude, product.location.longitude]} icon={icon} />)}
        </MapContainer>
    </section>
  )
}

export default MapInv