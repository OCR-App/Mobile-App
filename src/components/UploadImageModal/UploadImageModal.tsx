import React from 'react';
import {Dimensions, View} from 'react-native';
import Modal from 'react-native-modal';
import {imageOptions} from '../../utils/camera';
import {Props} from './UploadImageModalTypes';
import styles from './upload-image-modal-styles';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function UploadImageModal({
  visible,
  onChange,
  onDismiss,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cropArea = true,
}: Props) {
  const {height, width} = Dimensions.get('screen');

  const onTakeImage = () =>
    ImagePicker.openCamera(imageOptions)
      .then((image: Image) => onChange?.(image))
      .finally(onDismiss);

  const onPickImage = () =>
    ImagePicker.openPicker(imageOptions)
      .then((image: Image) => onChange?.(image))
      .finally(onDismiss);

  return (
    <Modal
      isVisible={visible}
      onTouchCancel={onDismiss}
      onBackButtonPress={onDismiss}
      statusBarTranslucent
      onBackdropPress={onDismiss}
      backdropOpacity={0.5}
      deviceHeight={height}
      deviceWidth={width}
      backdropColor="#000"
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={styles.container}>
      <PrimaryButton
        textStyles={styles.buttonText}
        styles={[styles.button, styles.cameraButton]}
        title="Open Camera"
        onPress={onTakeImage}
      />
      <View />
      <PrimaryButton
        textStyles={styles.buttonText}
        onPress={onPickImage}
        styles={[styles.button, styles.galleryButton]}
        title="Import from Gallery"
      />
      <PrimaryButton
        textStyles={styles.buttonText}
        styles={[styles.button, styles.cancelButton]}
        title="Cancel"
        onPress={onDismiss}
      />
    </Modal>
  );
}
