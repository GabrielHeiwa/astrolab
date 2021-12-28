import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container1: {
      flex: 1,
      backgroundColor: '#F0FFFF',
  },

  container2: {
    flex: 1,
    backgroundColor: '#F0FFFF',
  },
 
  view_home1: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10
  },

  foguete: {
    width: 500,
    height: 500,
    top: 125,
    left: 80
  },

  aninha: {
    width: 250,
    height: 250,
    top: -133,
    left: -110,
  },
});

export {css};