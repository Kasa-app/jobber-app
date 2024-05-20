import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    borderWidth: 4,
    borderColor: '#000000',
    borderRadius: 30,
    paddingLeft: 30,
    overflow: 'visible',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 5,
      width: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInputContainer: {
    flexDirection: 'column',
    height: 75,
    width: 310,
  },
  row: {
    backgroundColor: '#CF8B3D',
    padding: 13,
    height: 50,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#FDDB23',
  },
  description: {
    fontFamily: 'AvenirNext-Bold',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
