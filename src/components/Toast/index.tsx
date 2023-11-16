import React from 'react';
import styles from './styles';
import {BaseToast, ErrorToast, ToastProps} from 'react-native-toast-message';

export const TOAST_TOP_OFFSET = 70;

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: '#2D2D2D',
        borderLeftColor: 'green',
      }}
      text1NumberOfLines={4}
      text1Style={styles.text1}
    />
  ),

  error: (props: ToastProps) => (
    <ErrorToast
      style={{
        backgroundColor: '#2D2D2D',
        borderLeftColor: 'red',
      }}
      text1NumberOfLines={4}
      text1Style={styles.text1}
      {...props}
    />
  ),
};
