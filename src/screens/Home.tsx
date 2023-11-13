/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import UploadImageModal from '../components/UploadImageModal/UploadImageModal';
import {Image} from 'react-native-image-crop-picker';

const HomeScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<Partial<Image> | null>(null);

  console.log(image);

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

export default HomeScreen;
