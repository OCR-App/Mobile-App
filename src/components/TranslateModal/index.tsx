import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const TranslateModal = ({visible, onDismiss, text}: any) => {
  const {width, height} = Dimensions.get('screen');

  return (
    <Modal
      isVisible={visible}
      deviceHeight={height}
      deviceWidth={width}
      style={styles.modal}
      propagateSwipe
      statusBarTranslucent
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      onDismiss={onDismiss}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>{text}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TranslateModal;
