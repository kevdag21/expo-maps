import { AlignJustify } from "iconoir-react-native";
import { Image, View, StyleSheet, Text } from "react-native";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Ubication({ origin, destination }) {
  return (
    <View style={styles.container}>
      <View style={styles.origin}>
        <Text style={styles.Text}>{origin}</Text>
      </View>
      <View style={styles.destination}>
        <Text style={styles.Text}>{destination}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "left",
    border: 2,
    borderRadius: 10,
    marginTop: "5%",
    marginLeft: "2%",
    marginRight: "3%",
    borderWidth: 2,
  },
  origin: {
    color: "#111111",
    paddingBottom: "3%",
    paddingTop: "4%",
    marginLeft: "10%",
    borderBottomWidth: 1,
    width: "90%",
  },
  destination: {
    color: "#111111",
    marginLeft: "10%",
    paddingBottom: "4%",
    paddingTop: "3%",
  },
  Text: {
    fontSize: 20,
    fontWeight: "semibold",
  },
});
