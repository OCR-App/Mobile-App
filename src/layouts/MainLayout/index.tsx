import React, {ReactElement} from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';

const MainLayout: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>{children}</View>
    </>
  );
};

export default MainLayout;
