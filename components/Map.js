import React, { useContext } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import GooglePlacesInput from "./Search";
import useCurrentPosition from "../hooks/useCurrentPosition";
import  searchLocationContext  from "../context/searchLocationContext";

export function MapScreen() {
  const location = useCurrentPosition();
  const {searchLocation} = useContext(searchLocationContext);

  const renderSearchLocation = (searchLocation) => {
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
            draggable={true}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Marcador"}
            pinColor={"purple"}
          />
          {renderSearchLocation(searchLocation)}
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
