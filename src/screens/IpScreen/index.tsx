import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import {useAppDispatch} from '../../store/hooks';
import {setAppIp} from '../../store/Redux/Ip/IpSlice';

const IpScreen: React.FC = ({navigation}: any) => {
  const [ip, setIp] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    if (ip.length) {
      dispatch(setAppIp({ip}));
      navigation.navigate('Lang');
    }
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Please insert your IP</Text>
        <TextInput
          style={styles.input}
          placeholder="Ip"
          placeholderTextColor="#fff"
          value={ip}
          onChangeText={setIp}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>confirm</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default IpScreen;
