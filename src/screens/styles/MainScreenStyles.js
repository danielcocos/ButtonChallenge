import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex: metrics.size_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: metrics.size_40,
    width: metrics.size_70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    position: 'absolute',
    top: metrics.size_400,
    left: metrics.size_120,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
  forceButton: {
    width: metrics.size_70,
    height: metrics.size_70,
    backgroundColor: colors.red,
    borderRadius: metrics.size_35,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: metrics.size_50,
  },
});
