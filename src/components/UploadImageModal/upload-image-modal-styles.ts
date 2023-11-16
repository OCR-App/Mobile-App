import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: '40%',
    position: 'absolute',
    width: '100%',
    margin: 0,
  },
  button: {
    backgroundColor: '#2D2D2D',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 0,
    borderRadius: 0,
    height: 54,
  },
  buttonText: {
    color: '#2E8B57',
  },
  cameraButton: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  galleryButton: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  cancelButton: {
    marginTop: 30,
    borderRadius: 10,
  },
});

export default styles;
