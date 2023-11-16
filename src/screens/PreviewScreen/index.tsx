import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import UploadImageModal from '../../components/UploadImageModal/UploadImageModal';
import {Image} from 'react-native-image-crop-picker';
import {uploadImage} from '../../repositories/MainRepository';

const PreviewScreen: React.FC = () => {
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Upload image</Text>
      <PrimaryButton
        title="File"
        onPress={() => setVisible(true)}
        styles={{
          width: '90%',
        }}
      />
      <UploadImageModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        onChange={setImage}
      />
    </View>
  );
};

export default PreviewScreen;
