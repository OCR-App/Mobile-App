import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UploadImageModal from '../../components/UploadImageModal/UploadImageModal';
import {uploadImage} from '../../repositories/MainRepository';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';

const HomeScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<Partial<Image> | null>(null);

  useEffect(() => {
    if (image) {
      uploadImage(image?.data as string)
        .then(res => console.log(res))
        .catch(e => console.log(e));
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
