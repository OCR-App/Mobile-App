import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    width: '100%',
    justifyContent: 'center',
    bottom: 0,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 12,
  },
  content: {
    margin: 0,
    right: 0,
    alignSelf: 'center',
    backgroundColor: '#2D2D2D',
    height: '90%',
    width: '100%',
    overflow: 'hidden',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  sendButton: {position: 'absolute', right: 20, top: 10},
  sendIcon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    color: '#fff',
    width: '90%',
    paddingHorizontal: 14,
  },
  question: {
    width: '80%',
    alignSelf: 'flex-end',
    borderRadius: 30,
    padding: 12,
    color: '#fff',
    backgroundColor: '#404040',
    borderWidth: 1,
    borderColor: '#888',
    marginVertical: 12,
  },
  answer: {
    width: '80%',
    alignSelf: 'flex-start',
    borderRadius: 30,
    padding: 12,
    color: '#fff',
    backgroundColor: '#1a1919',
    borderWidth: 1,
    borderColor: '#888',
    marginBottom: 12,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 10,
    zIndex: 999,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default styles;
