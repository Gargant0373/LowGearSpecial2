import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

const markers: { name: string; coordinates: LatLngTuple }[] = [
    { name: "Bucharest", coordinates: [44.4268, 26.1025] },
    { name: "Sofia", coordinates: [42.6977, 23.3219] },
    { name: "Belgrade", coordinates: [44.7866, 20.4573] },
];

const path: LatLngTuple[] = [
    [44.4268, 26.1025], // Bucharest
    [42.6977, 23.3219], // Sofia
    [44.7866, 20.4573]  // Belgrade
];

const MapStyle = {
    height: "500px",
    width: "80%",
    "@media (max-width: 768px)": {
        width: "100%",
    },
}

function Map() {
    return (
        <MapContainer center={[44.4268, 26.1025]} zoom={5} style={MapStyle}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {markers.map(({ name, coordinates }) => (
                <Marker key={name} position={coordinates}>
                    <Popup>{name}</Popup>
                </Marker>
            ))}
            <Polyline positions={path} color="red" />
        </MapContainer>
    );
}

export default Map;
