import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      marginTop: 30,
      left: (width / 2) - 125,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 250 - 46,
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      paddingHorizontal: 10,
    },
    button: {
      width: 46,
      height: 40,
      borderColor: 'gray',
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      paddingHorizontal: 10,
      justifyContent: 'center',
    }
});

export default styles;