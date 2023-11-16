import React, {useCallback, useMemo, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';

const PreviewScreen: React.FC = ({navigation}: any) => {
  const bottomSheetRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['8%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <MainLayout>
      <>
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
                  <TouchableOpacity style={styles.option}>
                    <Image
                      source={require('../../assets/images/speaker.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <Image
                      source={require('../../assets/images/copy.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <Image
                      source={require('../../assets/images/close.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </BottomSheet>
        </View>
      </>
    </MainLayout>
  );
};

export default PreviewScreen;
