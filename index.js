
import { NativeModules } from 'react-native';

const { RNFloatingBubble } = NativeModules;

export const showFloatingBubble = (x = 70, y = 500, counter = '2') => RNFloatingBubble.showFloatingBubble(x, y, counter);
export const hideFloatingBubble = () => RNFloatingBubble.hideFloatingBubble();
export const checkPermission = () => RNFloatingBubble.checkPermission();
export const requestPermission = () => RNFloatingBubble.requestPermission();
export const initialize = () => RNFloatingBubble.initialize();

export default { showFloatingBubble, hideFloatingBubble, requestPermission, checkPermission, initialize };
