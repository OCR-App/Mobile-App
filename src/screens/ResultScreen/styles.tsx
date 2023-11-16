import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    backgroundColor: '#2D2D2D',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 50,
  },
  header: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sheet: {
    flex: 1,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'red',
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
  modalContainer: {
    flex: 1,
  },
  modalContentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    marginEnd: 14,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  languageText: {
    color: '#fff',
    marginStart: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalResult: {
    paddingHorizontal: 12,
    marginTop: 20,
    flex: 1,
  },
  modalResultText: {
    color: '#FFF',
    lineHeight: 23,
  },
  translateButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2E8B57',
    marginBottom: 30,
  },
  translateButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
