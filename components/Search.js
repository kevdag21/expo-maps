import React, { useContext } from "react";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import getSearchLocation from "../apiResponses/GetSearchLocation";
import useCurrentPosition from "../hooks/useCurrentPosition";
import searchLocationContext from "../context/searchLocationContext";

export default function GooglePlacesInput() {
  const loc = useCurrentPosition();
  const {setSearchLocation} = useContext(searchLocationContext)

  const handleOnPress = (result) => {
    const place_id = result.place_id;
    getSearchLocation(place_id).then((placeDetail) => {
      setSearchLocation(placeDetail.result.geometry.location)
    });
  };

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Buscar"
        onPress={(result) => {
          handleOnPress(result);
        }}
        query={{
          key: "AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0",
          language: "es",
          components: "country:mx",
          radius: 5000,
          location: `${loc.coords.latitude}, ${loc.coords.longitude}`,
          strictbounds: true,
        }}
        styles={{
          container: {
            position: "absolute",
            top: Platform.select({ ios: 60, android: 40 }),
            width: "100%",
          },
        }}
      />
    </>
  );
}
