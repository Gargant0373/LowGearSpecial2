import { bezierSpline, lineString } from "@turf/turf";
import { LatLngTuple, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";

const markers: { name: string; type: string; coordinates: LatLngTuple; offset: [number, number] }[] = [
    { name: "Start", type: "Start", coordinates: [45.74706571388822, 25.770193544309713], offset: [0, 0] },
    { name: "Priveliste Pesters", type: "Viewpoint", coordinates: [45.50634126178604, 25.290184060627112], offset: [0.1, -0.05] },
    { name: "Offroad Tunel", type: "Offroad", coordinates: [45.0682675184647, 24.604933062466227], offset: [-0.05, 0] },
    { name: "Somn Ziua 1", type: "Rest", coordinates: [45.33339917581352, 24.255429147199848], offset: [0.05, 0.05] },
    { name: "Offroad Start Strategica", type: "Offroad", coordinates: [45.38117907723171, 24.009501103529345], offset: [-0.05, 0] },
    { name: "Priveliste Transalpina", type: "Viewpoint", coordinates: [45.379394437864725, 23.651752089601537], offset: [0.08, 0] },
    { name: "Transvalcan Offroad", type: "Offroad", coordinates: [45.29927837247064, 23.31007607309575], offset: [-0.05, 0] },
    { name: "Offroad Campul lui Neag", type: "Offroad", coordinates: [45.27929812001961, 22.919895303586433], offset: [0.08, 0] },
    { name: "Monument 1", type: "Monument", coordinates: [44.837729333190545, 22.388974938558267], offset: [0, 0.15] },
    { name: "Somn Ziua 3", type: "Rest", coordinates: [44.679634697210616, 22.56023957243832], offset: [0, -0.15] },
    { name: "Monument 2", type: "Monument", coordinates: [44.00858599977445, 22.90476025017513], offset: [0, 0.08] },
    { name: "Monument 3", type: "Monument", coordinates: [43.64015615793776, 22.695693606026257], offset: [0, -0.1] },
    { name: "Somn Ziua 4", type: "Rest", coordinates: [43.14618666117879, 23.143499562846287], offset: [0.05, 0.03] },
    { name: "Offroad Trail", type: "Offroad", coordinates: [43.08982772686183, 23.35593863000439], offset: [-0.03, 0] },
    { name: "Priveliste Cave 1", type: "Viewpoint", coordinates: [43.207759754344394, 24.094547782148357], offset: [-0.03, 0] },
    { name: "Priveliste Cave 2", type: "Viewpoint", coordinates: [43.27222149949872, 24.879510732262506], offset: [0, 0.08] },
    { name: "Somn Ziua 5", type: "Rest", coordinates: [42.86590782588464, 24.677339263717055], offset: [0, 0.09] },
    { name: "Offroad Trail 2", type: "Offroad", coordinates: [42.7727951621418, 24.989467976965887], offset: [-0.05, 0] },
    { name: "Monument 5", type: "Monument", coordinates: [42.7435777276495, 25.401253308803586], offset: [-0.02, 0.05] },
    { name: "Somn Ziua 6", type: "Rest", coordinates: [43.03910745333883, 25.613894642711315], offset: [-0.03, 0] },
    { name: "Monument 6", type: "Monument", coordinates: [43.299390303900054, 26.930331544760747], offset: [-0.04, 0] },
    { name: "Priveliste Final", type: "Viewpoint", coordinates: [43.26610551304425, 27.772381518563986], offset: [-0.03, 0] },
    { name: "Finish", type: "Start", coordinates: [43.49183423094785, 28.581223530778136], offset: [0, 0] },
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
            {markers.map(({ name, type, coordinates, offset }) => {
                coordinates = [coordinates[0] + offset[0], coordinates[1] + offset[1], coordinates[2]];
                // Render marker and optionally use the interpolated point
                return (
                    <Marker key={name} position={coordinates} icon={typeIcons[type]}>
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