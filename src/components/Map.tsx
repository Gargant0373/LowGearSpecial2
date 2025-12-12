import { bezierSpline, lineString } from "@turf/turf";
import { LatLngTuple, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";

const markers: { name: string; type: string; coordinates: LatLngTuple; offset: [number, number] }[] = [
    { name: "Start", type: "Start", coordinates: [45.70939870852405, 24.010787333121037], offset: [0, 0] }, 
    { name: "Apuseni", type: "Viewpoint", coordinates: [46.32236244930637, 23.512268604839612], offset: [-0.05, 0] },
    { name: "Lac Chimic", type: "Viewpoint", coordinates: [46.327124582912155, 23.210528578378895], offset: [0.1, -0.05] },
    { name: "Somn Ziua 1", type: "Rest", coordinates: [46.303200777278306, 23.137104156090736], offset: [0.05, 0.05] },
    { name: "Offroad Vf. Bihor", type: "Offroad", coordinates: [46.4405802995557, 22.68896617837343], offset: [-0.05, 0] },
    { name: "Pestera Ghetar", type: "Monument", coordinates: [46.4405802995557, 22.68896617837343], offset: [0.08, 0] },
    { name: "Offroad Padis", type: "Offroad", coordinates: [46.5935684895008, 22.743971600938316], offset: [-0.05, 0] },
    { name: "Somn Ziua 2", type: "Rest", coordinates: [46.76632649611785, 22.41525779311975], offset: [0.08, 0] },
    { name: "Offroad Mina ", type: "Offroad", coordinates: [46.91446512616327, 22.51253348351515], offset: [0, 0.08] },
    { name: "Zona Scăldat", type: "Rest", coordinates: [46.94000562464082, 22.546609760312478], offset: [0, -0.1] },
    { name: "Deal Ireal", type: "Viewpoint", coordinates: [47.704565844279074, 23.91792158985268], offset: [0.05, 0.03] },
    { name: "Somn Ziua 3&4", type: "Rest", coordinates: [47.745786148004065, 23.893312765909148], offset: [-0.03, 0] },
    { name: "Offroad Baraj", type: "Offroad", coordinates: [47.79978738582149, 23.767416616747216], offset: [-0.03, 0] },
    { name: "Offroad Maramures", type: "Offroad", coordinates: [47.82450942025752, 23.67094407862629], offset: [-0.05, 0] },  
    { name: "Cimitirul Vesel", type: "Monument", coordinates: [47.97067467113835, 23.69503778410724], offset: [0, 0.08] },
    { name: "Memorialul Durerii", type: "Monument", coordinates: [47.927437183016124, 23.890826168564686], offset: [0, 0.08] },
    { name: "Somn Ziua 3&4", type: "Rest", coordinates: [47.745786148004065, 23.893312765909148], offset: [-0.03, 0] },
    { name: "Barsana", type: "Monument", coordinates: [47.792216576172784, 24.091113566643163], offset: [-0.02, 0.05] }, 
    { name: "Prislop", type: "Viewpoint", coordinates: [47.609469507304425, 24.855685917627422], offset: [-0.03, 0] },
    { name: "Offroad Darmoxa", type: "Offroad", coordinates: [47.184435695368, 25.553395413511424], offset: [-0.05, 0] },
    { name: "Somn Ziua 5", type: "Rest", coordinates: [46.811817313703834, 25.824188264601595], offset: [-0.03, 0] },
    { name: "Offroad Bicaz", type: "Offroad", coordinates: [46.72112035194618, 25.846608098607792], offset: [-0.02, 0.05] }, 
    { name: "Offroad Fagetel", type: "Offroad", coordinates: [46.464532737971446, 25.94920097715373], offset: [-0.02, 0.05] }, 
    { name: "Offroad Valea Uzului 1", type: "Offroad", coordinates: [46.29153391821998, 26.02779526676663], offset: [-0.05, 0] },
    { name: "Offroad Valea Uzului 2", type: "Offroad", coordinates: [46.34380693735695, 26.26195462723588], offset: [-0.05, 0] },
    { name: "Somn Ziua 6", type: "Rest", coordinates: [46.36727990329327, 26.4862186252996], offset: [-0.03, 0] },
    { name: "Finish", type: "Start", coordinates: [45.10778233106936, 28.21760765201795], offset: [0, 0] },
];
 


const typeIcons: { [key: string]: any } = {
    Start: divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-flag" style="color: black; font-size: 18px; font-weight: bold;"></i>',
    }),
    Viewpoint: divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-mountain" style="color: black; font-size: 18px; font-weight: bold;"></i>',
    }),
    Offroad: divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-car" style="color: black; font-size: 18px; font-weight: bold;"></i>',
    }),
    Rest: divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-campground" style="color: black; font-size: 18px; font-weight: bold;"></i>',
    }),
    Monument: divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-landmark" style="color: black; font-size: 18px; font-weight: bold;"></i>',
    }),
};

// Smooth the route using Turf.js
const smoothPath = (path: LatLngTuple[]) => {
    const line = lineString(path.map(([lat, lng]) => [lng, lat]));
    const smoothed = bezierSpline(line);
    return smoothed.geometry.coordinates.map(([lng, lat]) => [lat, lng] as LatLngTuple);
};

// Smooth path data
const path: LatLngTuple[] = smoothPath(markers.map((marker) => marker.coordinates));

const MapStyle = {
    height: "500px",
    width: "80%",
};

function Map() {
    return (
        <MapContainer center={[45.74706571388822, 25.770193544309713]} zoom={8} minZoom={7} maxZoom={9} style={MapStyle}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map(({ name, type, coordinates, offset }, index) => {
                const position: LatLngTuple = [coordinates[0] + offset[0], coordinates[1] + offset[1]];
                // Render marker and optionally use the interpolated point
                return (
                    <Marker key={`${name}-${index}`} position={position} icon={typeIcons[type]}>
                        <Popup>
                            <strong>{name}</strong>
                        </Popup>
                    </Marker>
                );
            })}
            <Polyline positions={path} color="red" weight={5} />
        </MapContainer>
    );
}

export default Map;