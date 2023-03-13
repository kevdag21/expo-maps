import React from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GooglePlacesInput from './Search';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

export function MapScreen() {
  const [location, setLocation] = useState({coords:{
    latitude: 20, 
    longitude: 20, 
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }})
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if( status === 'granted'){
        console.log('Permiso concedido')
      }else{
        console.log('Permisos no concedidos')
      }

      const loc = await Location.getCurrentPositionAsync()
      setLocation(loc)
    })()
  }, [])

 /* const handleButton = async () => {
    let {status} = Location.requestForegroundPermissionsAsync()
      if( status == 'granted'){
        console.log('Permiso concedido')
      }else{
        console.log('Permisos no concedidos')
      }

      const loc = await Location.getCurrentPositionAsync()

      console.log(loc.coords.latitude)
      setLocation(loc)
  }*/

  
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18,
          longitude: -94,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        <Marker
          draggable
          coordinate={{latitude: location.coords.latitude,
          longitude: location.coords.longitude}}
          title={'Marcador'}
          pinColor = {'red'}
        />
      </MapView>
    

      <GooglePlacesInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  primary: {
    main: '#FF5A5F',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#006c70',
    contrastText: '#ffffff'   
  },
  dark:{
    main:'#000000',
    contrastText: '#ffffff',
    lightDark: "#353535",
    metalblue:"#3E4A63"
    },
  grayScale:{
    gray100:"#FAFAFA",
    gray200:"#F5F5F5",
    gray300:"#ECECEC",   
  },
  button:{
    position: 'absolute',
    top: Platform.select({ ios: 90, android: 40 }),
    width: '100%',
  }
});