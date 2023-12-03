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

const GptModal = ({visible, onDismiss, question}: any) => {
  const {width, height} = Dimensions.get('screen');
  const [value, setValue] = useState(question);
  const [answer, setAnswer] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  const sendQuestion = async () => {
    setInputVisible(false);
    const text =
      'isi quasi. Maiores labore corporis ipsam rerum, cupiditate itaque!';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        setAnswer(prev => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  };

  const onClose = () => {
    onDismiss();
    setInputVisible(true);
    setAnswer('');
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
            <Text style={styles.question}>{value}</Text>
          )}
          {answer && <Text style={styles.answer}>{answer}</Text>}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default GptModal;
