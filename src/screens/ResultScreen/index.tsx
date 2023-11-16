import React, {useCallback, useMemo, useRef} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import MainLayout from '../../layouts/MainLayout';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';
import Toast from 'react-native-toast-message';
import Tts from 'react-native-tts';

const PreviewScreen: React.FC = ({navigation}: any) => {
  const text = 'This is a test description';
  const bottomSheetRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['8%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
              source={require('../../assets/images/preview.png')}
              style={styles.image}
            />
          </View>
          <BottomSheet
            ref={bottomSheetRef}
            backgroundStyle={{
              backgroundColor: '#2D2D2D',
              borderColor: '#fff',
              borderWidth: 1,
            }}
            index={1}
            snapPoints={snapPoints}
            handleIndicatorStyle={{display: 'none'}}
            onChange={handleSheetChanges}>
            <View style={styles.modalContentContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.languageText}>English</Text>
                <View style={styles.modalOptions}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() =>
                      Tts.getInitStatus().then(() => Tts.speak(text))
                    }>
                    <Image
                      source={require('../../assets/images/speaker.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      Clipboard.setString(text);
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
              <ScrollView
                style={styles.modalResult}
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Text style={styles.modalResultText}>{text}</Text>
                <TouchableOpacity style={styles.translateButton}>
                  <Text style={styles.translateButtonText}>Translate</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </BottomSheet>
        </View>
      </>
    </MainLayout>
  );
};

export default PreviewScreen;
