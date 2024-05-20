import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  centerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 40,
  },
  top: {},
  box: {
    backgroundColor: '#CF8B3D',
    height: 40,
  },
  title: {
    top: 30,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
  },
});

export default styles;
