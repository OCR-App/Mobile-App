import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setIsLoading} from '../../store/Redux/Core/coreSlice';
import axios from 'axios';
import URLs from '../../adapter/axios/URLs';

const PreviewScreen: React.FC = ({navigation}: any) => {
  const {image} = useAppSelector(state => state);
  const {ip} = useAppSelector(state => state.ip);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(setIsLoading({isLoading: true}));
    axios
      .post(`http://${ip}:8000/${URLs.CONFIRM_IMAGE}`, {
        uuid: image?.imageId,
      })
      .then(res => {
        navigation.navigate('Result', {result: res?.data?.text});
        console.log('res?.data', res?.data?.text);
      })
      .catch(e => console.log('eee', e))
      .finally(() => dispatch(setIsLoading({isLoading: false})));
  };

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
            onPress={handleSubmit}
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
            source={{uri: `http://${ip}:8000/${image.editedImage}`}}
            style={styles.image}
          />
        </View>
      </>
    </MainLayout>
  );
};

export default PreviewScreen;
