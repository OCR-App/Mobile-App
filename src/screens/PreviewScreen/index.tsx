import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';

const PreviewScreen: React.FC = ({navigation}: any) => {
  return (
    <MainLayout>
      <>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={[
              styles.button,
              {
                backgroundColor: '#2D2D2D',
                borderWidth: 1,
                borderColor: '#fff',
              },
            ]}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Result')}
            style={[
              styles.button,
              {
                backgroundColor: '#2E8B57',
              },
            ]}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/preview.png')}
            style={styles.image}
          />
        </View>
      </>
    </MainLayout>
  );
};

export default PreviewScreen;
