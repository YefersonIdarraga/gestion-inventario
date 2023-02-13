import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import useSwr from 'swr'
import './mapInv.css'

const fetcher = (...args) => fetch(...args).then(response => response.json())

const icon = new Icon({
  iconUrl: "https://e7.pngegg.com/pngimages/363/769/png-clipart-location-icon-landmark-map.png",
  iconSize: [25, 25]
})

const MapInv = () => {

  const url = "http://localhost:3000/products"

  const { data, error } = useSwr(url, fetcher)
  console.log(data)
  const products = data && !error ? data.slice(0,100) : [];
  const position = [6.230833, -75.590553]

  return (
    <section className='map-container'>
        <MapContainer center={[6.230833, -75.590553]} zoom={12}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {products.map(product => <Marker key={product.id} position={position} icon={icon}/>)}
        </MapContainer>
    </section>
  )
}

export default MapInv