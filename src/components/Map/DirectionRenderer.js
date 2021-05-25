import { DirectionsRenderer } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";

const MapDirectionsRenderer = ({ places }) => {
	const [directions, setDirections] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const waypoints = places.map((p) => ({
			location: { lat: p.lat, lng: p.lng },
			stopover: true,
		}));
		const origin = waypoints.shift().location;
		const destination = waypoints.pop().location;

		const directionsService = new window.google.maps.DirectionsService();
		directionsService.route(
			{
				origin: origin,
				destination: destination,
				travelMode: "DRIVING",
				waypoints: waypoints,
			},
			(result, status) => {
				console.log(result);
				if (status === window.google.maps.DirectionsStatus.OK) {
					setDirections(result);
				} else {
					setError(result);
				}
			}
		);
	});

	if (error) {
		return <h1>{error}</h1>;
	}
	return directions && <DirectionsRenderer directions={directions} />;
};

export default MapDirectionsRenderer;
