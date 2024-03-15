import React from "react";
import { Center } from "@chakra-ui/react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "300px",
};

function Map(props: { lat: number; long: number }) {
  let { lat, long } = props;

  const center = {
    lat: -31.64881,
    lng: -60.70868,
  };

  const position = {
    lat: lat,
    lng: long,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCKNGyH3YVhuCzzVmj6AFbhf_12QeBEBTg",
  });

  const [map, setMap] = React.useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = React.useState(false);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const toggleInfoWindow = () => {
    console.log("Toggle Info Window called");
    setInfoWindowOpen(!infoWindowOpen);
  };

  return isLoaded ? (
    <Center>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onUnmount={onUnmount}
      >
        <Marker position={position} onClick={toggleInfoWindow} />
        {infoWindowOpen && (
          <InfoWindow position={position} onCloseClick={toggleInfoWindow}>
            <div>
              <strong>Dirección:</strong> Dirección exacta
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
              </a>
              <br />
              <a
                href={`https://www.google.com/maps/@${lat},${long},15z`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ampliar mapa
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </Center>
  ) : (
    <></>
  );
}

export default React.memo(Map);
