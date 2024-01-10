import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const GptModal = ({visible, onDismiss, question}: any) => {
  const {width, height} = Dimensions.get('screen');
  const [value, setValue] = useState(question);
  const [answer, setAnswer] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  const sendQuestion = async () => {
    if (!value.length) {
      return;
    }
    setInputVisible(false);
    const text =
      'isi quasi. Maiores labore corporis ipsam rerum, cupiditate itaque!';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        setAnswer(prev => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 50);

        fadeQuestion.value = withTiming(1, {
          duration: 200,
        });
        fadeAnswer.value = withTiming(1, {duration: 1});
      }
    }
    typeWriter();
  };
  const fadeQuestion = useSharedValue(0);
  const questionStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeQuestion.value,
    };
  });

  const fadeAnswer = useSharedValue(0);
  const answerStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnswer.value,
    };
  });

  const onClose = () => {
    onDismiss();
    setInputVisible(true);
    setAnswer('');
    fadeQuestion.value = withTiming(0, {duration: 0});
  };

  return (
    <Modal
      isVisible={visible}
      deviceHeight={height}
      deviceWidth={width}
      style={styles.modal}
      propagateSwipe
      statusBarTranslucent
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onDismiss={onClose}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image
            source={require('../../assets/images/close.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Ask GPT</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {inputVisible ? (
            <View style={styles.inputContainer}>
              <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
                cursorColor="#fff"
                multiline
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={sendQuestion}>
                <Text style={styles.sendIcon}>√</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Animated.View style={questionStyle}>
              <Text style={styles.question}>{value}</Text>
            </Animated.View>
          )}
          {answer && (
            <Animated.View style={answerStyle}>
              <Text style={styles.answer}>{answer}</Text>
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default GptModal;
