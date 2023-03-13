import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function GooglePlacesInput () {
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
