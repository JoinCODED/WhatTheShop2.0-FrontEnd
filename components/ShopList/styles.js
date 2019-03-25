import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  item: {
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.4,
    height: 150,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0
  },

  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1
  },
  name: {
    fontSize: 20,
    color: "#687373",
    backgroundColor: "white",
    marginTop: 5,
    zIndex: 1000
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#BC8F8F",
    position: "absolute",
    top: "60%"
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 5
  },
  background: {
    width: null,
    flex: 1
  }
});
export default styles;
