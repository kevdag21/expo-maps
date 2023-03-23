import React, { useContext } from "react";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import getSearchLocation from "../apiResponses/GetSearchLocation";
import useCurrentLocation from "../hooks/useCurrentLocation";
import searchLocationContext from "../context/searchLocationContext";

export default function Search({currentLocation}) {
  const {setSearchLocation} = useContext(searchLocationContext)

  const handleOnPress = (result) => {
    const place_id = result.place_id;
    getSearchLocation(place_id).then((placeDetail) => {
      const location = placeDetail.result.geometry.location;
      location.name = placeDetail.result.name
      setSearchLocation(location)
    });
  };

  return (
    <>
      <GooglePlacesAutocomplete 
        placeholder='Buscar'
        onPress={(result) => {
          handleOnPress(result);
        }}
        query={{
          key: 'AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0',
          language: 'es',
          components: 'country:mx',
          radius: 5000,
          location: `${currentLocation.coords.latitude}, ${currentLocation.coords.longitude}`,
          strictbounds: true,
        }}
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ ios: '10%', android: '10%' }),
            width: '100%',
          },
        }}
      />
    </>
  );
}
