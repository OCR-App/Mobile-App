import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import MainLayout from '../../layouts/MainLayout';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import styles from './styles';
import Toast from 'react-native-toast-message';
import Tts from 'react-native-tts';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setIsLoading} from '../../store/Redux/Core/coreSlice';
import TranslateModal from '../../components/TranslateModal';

const PreviewScreen: React.FC = ({navigation, route}: any) => {
  // const result = route.params.result;
  const result = 'udiandae. Ut, nemo. Itaque officia, ';
  const [translateModalVisible, setTranslateModalVisible] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const {image} = useAppSelector(state => state);
  const {ip} = useAppSelector(state => state.ip);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<any>(null);
  const snapPoints = useMemo(() => ['8%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const translate = async () => {
    // dispatch(setIsLoading({isLoading: true}));
    // const res = await fetch('https://libretranslate.com/translate', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     q: 'سلام \nحالتون چطوره',
    //     source: 'fa',
    //     target: 'en',
    //     format: 'text',
    //     api_key: '',
    //   }),
    //   headers: {'Content-Type': 'application/json'},
    // });

    // const tmp = await res.json();
    setTranslatedText('tmp');
    setTranslateModalVisible(true);

    // dispatch(setIsLoading({isLoading: false}));
  };

  return (
    <MainLayout>
      <>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            navigation.reset({
              index: 1,
              routes: [{name: 'Home'}],
            });
          }}>
          <Image
            source={require('../../assets/images/close.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.container}>
            <Image
              source={{uri: `http://${ip}:8000/${image.editedImage}`}}
              style={styles.image}
            />
          </View>
          <BottomSheet
            ref={bottomSheetRef}
            backgroundStyle={styles.bottomSheet}
            index={1}
            snapPoints={snapPoints}
            handleIndicatorStyle={styles.bottomSheetIndicator}
            onChange={handleSheetChanges}>
            <View style={styles.modalContentContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.languageText}>English</Text>
                <View style={styles.modalOptions}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() =>
                      Tts.getInitStatus().then(() => Tts.speak(result))
                    }>
                    <Image
                      source={require('../../assets/images/speaker.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      Clipboard.setString(result);
                      Toast.show({
                        type: 'success',
                        position: 'top',
                        topOffset: 50,
                        visibilityTime: 5000,
                        text1: 'text copied Successfully!',
                      });
                    }}>
                    <Image
                      source={require('../../assets/images/copy.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => bottomSheetRef?.current?.collapse()}>
                    <Image
                      source={require('../../assets/images/close.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <BottomSheetScrollView
                style={styles.modalResult}
                contentContainerStyle={styles.modalResultContent}>
                <Text style={styles.modalResultText}>{result}</Text>
              </BottomSheetScrollView>
              <View
                style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
                <TouchableOpacity
                  style={styles.translateButton}
                  onPress={translate}>
                  <Text style={styles.translateButtonText}>Translate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gptButton} onPress={translate}>
                  <Text style={styles.gptButtonText}>Ask GPT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>
        </View>
        <TranslateModal
          visible={translateModalVisible}
          text={translatedText}
          onDismiss={() => setTranslateModalVisible(false)}
        />
      </>
    </MainLayout>
  );
};

export default PreviewScreen;
