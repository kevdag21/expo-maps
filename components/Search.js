import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import useCurrentPosition from '../hooks/useCurrentPosition';

export default function GooglePlacesInput () {
  const loc = useCurrentPosition();
  console.log(loc)
  return (
    <GooglePlacesAutocomplete
      placeholder='Buscar'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
       query={{
          key: 'AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0',
          language: 'es',
          components: 'country:mx',
          radius: 5000, 
          location: `${loc.coords.latitude}, ${loc.coords.longitude}`,
          strictbounds: true 
      }}
      
    styles={{
        container: {
            position: 'absolute',
            top: Platform.select({ ios: 60, android: 40 }),
            width: '100%',
        },
    }}
    />
  );
};
