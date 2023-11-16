import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '80%',
    backgroundColor: '#2D2D2D',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  header: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    padding: 8,
    borderRadius: 10,
    minWidth: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
