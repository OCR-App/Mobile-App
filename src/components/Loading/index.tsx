import React from 'react';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import {useAppSelector} from '../../store/hooks';
import styles from './styles';

const Loading: React.FC = () => {
  const {isLoading} = useAppSelector(state => state.core);

  return (
    <Modal
      isVisible={isLoading}
      statusBarTranslucent
      onDismiss={() => {}}
      onBackButtonPress={() => {}}
      style={styles.modal}
      onBackdropPress={() => {}}>
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        style={styles.lottie}
      />
    </Modal>
  );
};

export default Loading;
