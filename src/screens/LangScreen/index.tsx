import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import {useAppDispatch} from '../../store/hooks';
import {setAppLang} from '../../store/Redux/lang/LangSlice';

const LangScreen: React.FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Select your language</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setAppLang({lang: 'english'}));
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setAppLang({lang: 'persian'}));
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Persian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setAppLang({lang: 'custom'}));
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Custom Model</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default LangScreen;
