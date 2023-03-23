import react from "react";
import { View, StyleSheet } from "react-native";
import WonderType from "./WonderType";
import wonderTypesData from "../assets/data/wonderTypes";
import Ubication from "./Ubication";


export default function WonderSelector({ origin, destination }) {
  return (
    <View style={styles.container}>
      <Ubication 
        style={styles}
        origin={origin} 
        destination={destination} />
      {wonderTypesData.map((name={}) => (
        <WonderType name={name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: Platform.select({ ios: "0%", android: "0%" }),
  },
});
