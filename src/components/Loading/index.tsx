import React from 'react';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import {useAppSelector} from '../../store/hooks';

const Loading: React.FC = () => {
  const {isLoading} = useAppSelector(state => state.core);

  return (
    <Modal
      isVisible={isLoading}
      statusBarTranslucent
      onDismiss={() => {}}
      onBackButtonPress={() => {}}
      onBackdropPress={() => {}}>
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        style={{
          width: 300,
          height: 300,
        }}
      />
    </Modal>
  );
};

export default Loading;
