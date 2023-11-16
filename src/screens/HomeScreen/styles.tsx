import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    height: 120,
  },
  logo: {
    width: '40%',
    height: 120,
    resizeMode: 'contain',
  },
  description: {
    color: '#ddd',
    marginTop: 24,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  uploadButton: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#545454',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanIcon: {
    width: '30%',
    resizeMode: 'contain',
  },
  scanDescription: {
    color: '#545454',
    fontWeight: 'bold',
  },
});

export default styles;
