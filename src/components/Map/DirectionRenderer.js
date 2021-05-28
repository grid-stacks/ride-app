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
				provideRouteAlternatives: true,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<>
			{directions &&
				directions.routes &&
				directions.routes.length &&
				directions.routes.map((_, i) => (
					<DirectionsRenderer
						directions={directions}
						routeIndex={i}
						panel={document.getElementById("right-panel")}
					/>
				))}
			<div id="right-panel"></div>
		</>
	);
};

export default MapDirectionsRenderer;
