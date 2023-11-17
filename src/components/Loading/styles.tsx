import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: '100%',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
  },
});

export default styles;
