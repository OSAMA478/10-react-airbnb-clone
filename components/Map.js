import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; //
import "leaflet-defaulticon-compatibility";

const Map = ({ data }) => {
	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "80%", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{data.map((place) => (
				<Marker position={[place.lat, place.long]}>
					<Popup>{place.title}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default Map;
