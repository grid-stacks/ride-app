import React, { useRef, useState } from "react";
import {
	GoogleMap,
	DistanceMatrixService,
	useLoadScript,
	Marker,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import MapDirectionsRenderer from "../components/Map/DirectionRenderer";

const containerStyle = {
	width: "100%",
	height: "800px",
	position: "relative",
};

const libraries = ["places"];

const Map = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyBzxjDoxaJWjLPsx0Uqw02inYLOpiHCCzM",
		libraries: libraries,
	});

	// const onClick = (...args) => {
	// 	console.log("onClick args: ", args);
	// };

	const [center] = useState({
		lat: -3.745,
		lng: -38.523,
	});

	const fromRef = useRef(null);
	const toRef = useRef(null);

	const [fromMarker, setFromMarker] = useState({});
	const [toMarker, setToMarker] = useState({});
	const [totalTime, setTotalTime] = useState(null);
	const [totalDistance, setTotalDistance] = useState(null);

	const [middlePlaces, setMiddlePlace] = useState([]);

	const handleMiddlePlaces = () => {
		setMiddlePlace([...middlePlaces, {}]);
	};

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(16);
	}, []);

	if (loadError) return "Error loading map!";
	if (!isLoaded) return "Loading...";

	return (
		<>
			{console.log(middlePlaces)}
			<button onClick={handleMiddlePlaces}>Add</button>
			<Search
				panTo={panTo}
				setMarker={setFromMarker}
				otherMarker={setToMarker}
				fromMarker={fromMarker}
				toMarker={toMarker}
				key={1}
				ref={fromRef}
				fromRef={fromRef}
				toRef={toRef}
				type="from"
			/>
			{middlePlaces.length
				? middlePlaces.map((m, i) => (
						<Search
							panTo={panTo}
							setMarker={setMiddlePlace}
							key={i + 1}
							position={i}
							middlePlaces={middlePlaces}
						/>
				  ))
				: null}
			<Search
				panTo={panTo}
				setMarker={setToMarker}
				otherMarker={setFromMarker}
				fromMarker={fromMarker}
				toMarker={toMarker}
				key={middlePlaces.length + 2}
				ref={toRef}
				fromRef={fromRef}
				toRef={toRef}
				type="to"
			/>
			<br />
			{totalDistance ? <div>Total distance: {totalDistance}</div> : null}
			{totalTime ? (
				<div>
					Total time: {totalTime}
					<br />
				</div>
			) : null}

			<GoogleMap
				id="transit-example"
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				// onClick={onClick}
				onLoad={onMapLoad}
				options={{ disableDefaultUI: true, zoomControl: true }}
			>
				{fromMarker && fromMarker.lat ? (
					<Marker
						key={1}
						position={{
							lat: fromMarker.lat,
							lng: fromMarker.lng,
						}}
					/>
				) : null}

				{middlePlaces && middlePlaces.length
					? middlePlaces.map((m, i) => (
							<>
								{m.lat ? (
									<Marker
										key={i + 1}
										position={{
											lat: m.lat,
											lng: m.lng,
										}}
									/>
								) : null}
								{console.log(m)}
							</>
					  ))
					: null}

				{toMarker && toMarker.lat ? (
					<Marker
						key={middlePlaces.length + 2}
						position={{ lat: toMarker.lat, lng: toMarker.lng }}
					/>
				) : null}
				{toMarker && toMarker.lat && fromMarker && fromMarker.lat ? (
					<>
						<DistanceMatrixService
							options={{
								destinations: [toMarker],
								origins: [fromMarker],
								travelMode: "DRIVING",
							}}
							callback={(response) => {
								console.log(response);
								setTotalTime(
									response.rows[0].elements[0].duration.text
								);
								setTotalDistance(
									response.rows[0].elements[0].distance.text
								);
							}}
						/>

						<MapDirectionsRenderer
							places={[fromMarker, ...middlePlaces, toMarker]}
						/>
					</>
				) : null}
			</GoogleMap>
		</>
	);
};

export default Map;

export const Search = ({
	panTo,
	setMarker,
	otherMarker,
	fromMarker,
	toMarker,
	position,
	middlePlaces,
	fromRef,
	toRef,
	type,
}) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => -3.745, lng: () => -38.523 },
			radius: 100 * 1000,
		},
	});

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();
		if (Object.keys(fromMarker).length && Object.keys(toMarker).length) {
			setMarker({});
			otherMarker({});

			if (type === "from") {
				toRef.current = null;
			} else if (type === "to") {
				fromRef.current = null;
			}
		}

		try {
			const results = await getGeocode({ address });
			const { lat, lng } = await getLatLng(results[0]);
			panTo({ lat, lng });

			if (middlePlaces && middlePlaces.length) {
				middlePlaces[position] = { lat, lng };
				setMarker(middlePlaces);
			} else {
				setMarker({ lat, lng });
			}
		} catch (error) {
			console.log("😱 Error: ", error);
		}
	};

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
				disabled={!ready}
				placeholder={"Enter an address"}
			></ComboboxInput>
			<ComboboxPopover>
				<ComboboxList>
					{status === "OK" &&
						data.map(({ id, description }) => (
							<ComboboxOption key={id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};
