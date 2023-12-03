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
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 40,
    zIndex: 999,
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
  modalResultContent: {
    justifyContent: 'space-between',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
  },
  modalContentContainer: {
    flex: 1,
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
  },
  modalResultText: {
    textAlign: 'left',
    color: '#FFF',
    lineHeight: 23,
  },
  translateButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2E8B57',
    marginVertical: 20,
  },
  translateButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomSheet: {
    backgroundColor: '#2D2D2D',
    borderColor: '#fff',
    borderWidth: 1,
  },
  bottomSheetIndicator: {display: 'none'},
  gptButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#2E8B57',
    borderWidth: 2,
  },
  gptButtonText: {
    textAlign: 'center',
    color: '#2E8B57',
    fontWeight: 'bold',
  },
});

export default styles;
