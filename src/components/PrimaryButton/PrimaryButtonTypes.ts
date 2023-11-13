import {
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';

interface Props {
  title: string;
  color?: string;
  suffix?: HTMLImageElement;
  prefix?: HTMLImageElement;
  styles?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  textStyles?: StyleProp<TextStyle>;
  activeOpacity?: number;
  testID?: string;
}

export default Props;
