import React, { useContext } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import GooglePlacesInput from "./Search";
import useCurrentLocation from "../hooks/useCurrentLocation";
import  searchLocationContext  from "../context/searchLocationContext";
import MapViewDirections from "react-native-maps-directions";


export function MapScreen() {
  const currentLocation = useCurrentLocation();
  const {searchLocation} = useContext(searchLocationContext);

  const renderMarkerSearchLocation = (searchLocation) => {
    if (searchLocation) {
      return (
        <Marker
          draggable={false}
          coordinate={{
            latitude: searchLocation.lat,
            longitude: searchLocation.lng,
          }}
          title={"Marcador"}
          pinColor={"red"}
        />
      );
    }
  };

  const renderPolyline = (searchLocation) =>{
    if (searchLocation){
      return (
        <MapViewDirections
          origin={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          }}
          destination={{
            latitude: searchLocation.lat,
            longitude: searchLocation.lng,
          }}
          apikey={"AIzaSyBNLEE0e6JiPHJh88NuSvdOLBggmS43Mv0"}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      );
    }
  }

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
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        {renderPolyline(searchLocation)}
        <Marker
          draggable={true}
          coordinate={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          }}
          title={"Marcador"}
          pinColor={"purple"}
        />
        {renderMarkerSearchLocation(searchLocation)}
      </MapView>
      <GooglePlacesInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  primary: {
    main: "#FF5A5F",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#006c70",
    contrastText: "#ffffff",
  },
  dark: {
    main: "#000000",
    contrastText: "#ffffff",
    lightDark: "#353535",
    metalblue: "#3E4A63",
  },
  grayScale: {
    gray100: "#FAFAFA",
    gray200: "#F5F5F5",
    gray300: "#ECECEC",
  },
  button: {
    position: "absolute",
    top: Platform.select({ ios: 90, android: 40 }),
    width: "100%",
  },
});
