import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UploadImageModal from '../../components/UploadImageModal/UploadImageModal';
import {uploadImage} from '../../store/repositories/MainRepository';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setIsLoading} from '../../store/Redux/Core/coreSlice';
import {setGivenImage} from '../../store/Redux/Image/imageSlice';

const HomeScreen: React.FC = ({navigation}: any) => {
  const {lang} = useAppSelector(state => state.lang);
  const {ip} = useAppSelector(state => state.ip);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<Partial<Image> | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (image) {
      dispatch(setIsLoading({isLoading: true}));
      uploadImage(image as any, lang, ip)
        .then(res => {
          console.log('res', res);
          const tmp = JSON.parse(res);
          dispatch(
            setGivenImage({
              id: tmp?.uuid,
              originalImage: tmp?.original_image,
              editedImage: tmp?.edited_image,
            }),
          );
          navigation.navigate('Preview');
        })
        .catch(e => console.log(e.response))
        .finally(() => dispatch(setIsLoading({isLoading: false})));
    }
  }, [image]);

  return (
    <MainLayout>
      <>
        <ImageBackground
          source={require('../../assets/images/header.png')}
          style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </ImageBackground>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lang')}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.description}>
            to starting the ocr process, please upload your image in box below
          </Text>
        </View>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => setVisible(true)}>
          <Image
            source={require('../../assets/images/scan.png')}
            style={styles.scanIcon}
          />
          <Text style={styles.scanDescription}>import your image here</Text>
        </TouchableOpacity>
        <UploadImageModal
          visible={visible}
          onDismiss={() => setVisible(false)}
          onChange={setImage}
        />
      </>
    </MainLayout>
  );
};

export default HomeScreen;
