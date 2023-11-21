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
import {useAppDispatch} from '../../store/hooks';
import {setIsLoading} from '../../store/Redux/Core/coreSlice';
import {setGivenImage} from '../../store/Redux/Image/imageSlice';

const HomeScreen: React.FC = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<Partial<Image> | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (image) {
      // dispatch(setIsLoading({isLoading: true}));
      uploadImage(image?.data as string, 'english')
        .then(res => {
          const {original_image, uuid, edited_image} = JSON.parse(res.data);
          dispatch(
            setGivenImage({
              image: original_image,
              id: uuid,
              editedImage: edited_image,
            }),
          );
        })
        .catch(e => console.log(e))
        .finally(() => dispatch(setIsLoading({isLoading: false})));
      // setTimeout(() => {
      // dispatch(setIsLoading({isLoading: false}));
      // }, 6000);
      navigation.navigate('Preview');
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
          <Text style={styles.description}>
            جهت جداسازی متن از روی عکس، لطفا تصویر خود را از قسمت پایین آپلود
            کنید.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => setVisible(true)}>
          <Image
            source={require('../../assets/images/scan.png')}
            style={styles.scanIcon}
          />
          <Text style={styles.scanDescription}>
            لطفا تصویر خود را وارد کنید
          </Text>
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
