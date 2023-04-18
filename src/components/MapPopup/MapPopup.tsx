import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Geocode from "react-geocode";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY as string);

const calculateCenter = (x: number, y: number): number => (x + y) / 2;

const MapPopup: React.FC<{
  from: string | null;
  to: string | null;
  open: boolean;
  onClose: (e: any) => void;
}> = ({ from, to, open, onClose }) => {
  console.log(from, to);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });
  const [fromLocation, setFromLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [toLocation, setToLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  useEffect(() => {
    const dataFetch = async () => {
      if (from && to) {
        try {
          const fromResponse = await Geocode.fromAddress(from);
          const toResponse = await Geocode.fromAddress(to);

          const { lat: fromLat, lng: fromLng } =
            fromResponse.results[0].geometry.location;
          const { lat: toLat, lng: toLng } =
            toResponse.results[0].geometry.location;

          setFromLocation({ lat: fromLat, lng: fromLng });
          setToLocation({ lat: toLat, lng: toLng });
        } catch (error) {
          console.error(error);
        }
      }
    };

    dataFetch();
  }, [from, to]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="from-to-map">Map</DialogTitle>
      <DialogContent>
        <div style={{ height: "40vh", width: "30vw" }}>
          {fromLocation && toLocation && isLoaded && (
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={{
                lat: calculateCenter(fromLocation.lat, toLocation.lat),
                lng: calculateCenter(fromLocation.lng, toLocation.lng),
              }}
              zoom={8}
            >
              <Marker
                label="From"
                position={{
                  lat: fromLocation.lat,
                  lng: fromLocation.lng,
                }}
              ></Marker>
              <Marker
                label="To"
                position={{
                  lat: toLocation.lat,
                  lng: toLocation.lng,
                }}
              ></Marker>
            </GoogleMap>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapPopup;
