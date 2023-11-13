import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import primaryButtonStyles from './primary-button-styles';
import Props from './PrimaryButtonTypes';

const PrimaryButton: React.FC<Props> = props => {
  const {
    title,
    styles,
    onPress,
    testID,
    disabled,
    textStyles,
    color,
    activeOpacity,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      testID={testID}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[
        {backgroundColor: color ? color : '#00A5B8'},
        primaryButtonStyles.button,
        disabled && primaryButtonStyles.disabled,
        styles,
      ]}>
      <Text
        style={[
          disabled
            ? primaryButtonStyles.disabledTitle
            : primaryButtonStyles.title,
          textStyles,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
