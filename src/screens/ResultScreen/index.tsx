import React, {useCallback, useMemo, useRef} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
              <ScrollView
                style={styles.modalResult}
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Text style={styles.modalResultText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                  congue mauris rhoncus aenean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin. Sapien faucibus et molestie ac
                  feugiat sed lectus vestibulum. Ullamcorper velit sed
                  ullamcorper morbi tincidunt ornare massa eget. Dictum varius
                  duis at consectetur lorem. Nisi vitae suscipit tellus mauris a
                  diam maecenas sed enim. Velit ut tortor pretium viverra
                  suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
                  Non nisi est sit amet facilisis magna. Dignissim diam quis
                </Text>
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
