import React, { useContext } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Search from "./Search";
import useCurrentLocation from "../hooks/useCurrentLocation";
import  searchLocationContext  from "../context/searchLocationContext";
import MapViewDirections from "react-native-maps-directions";
import WonderSelector from "./WonderSelector";

export function MapScreen() {
  const currentLocation = useCurrentLocation();
  const {searchLocation} = useContext(searchLocationContext);

//Dibuja el marcador en la locación de destino
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

  //Dibuja la linea entre el punto de origen y el de destino
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
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);
            }}
          />
      );
    }
  }

  const renderWonderSelector = (searchLocation) => {
    if (searchLocation) {
      return <WonderSelector 
        origin={currentLocation.name}
        destination={searchLocation.name}
      />;
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
      <Search currentLocation={currentLocation}/>
      {renderWonderSelector(searchLocation)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
}) 


