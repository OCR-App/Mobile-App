import {Image} from 'react-native-image-crop-picker';

export interface Props {
  visible: boolean;
  cropArea?: boolean;
  squareImage?: boolean;
  onDismiss: () => void;
  onChange: (image: Image) => void;
}
