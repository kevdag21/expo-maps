import {Image, View, StyleSheet, Text} from "react-native"

export default function WonderType({ name }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={require("../assets/images/Comfort.jpeg")}
      />
      <Text style={styles.wonderType}>{name.name}</Text>
      <Text style={styles.price}>{name.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
   /* borderWidth: 1,
    borderBottom: 1,
    width: "95%",
    borderRadius: 20,
    marginLeft: '2%'*/
  },
  imagen: {
    height: "200%",
    width: "25%",
    resizeMode: "contain",
    marginLeft: "1%",
  },
  wonderType: {
    flex: 5,
    fontSize: 25,
    fontWeight: "semibold",
    color: "#111111",
  },
  price: {
    flex: 1,
    fontSize: 28,
    fontWeight: "semibold",
    color: "red",
    marginLeft: "2%",
  },
});