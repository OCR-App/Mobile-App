import {StyleSheet} from 'react-native';

const primaryButtonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 40,
    width: '100%',
    marginVertical: 10,
  },
  disabled: {
    backgroundColor: '#ddd',
  },
  title: {
    color: '#fcfcfc',
  },
  disabledTitle: {
    color: '#445963',
  },
});

export default primaryButtonStyles;
