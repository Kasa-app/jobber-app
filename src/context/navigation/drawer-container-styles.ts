import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
  },
  drawer: {
    width: '90%',
  },
  icons: {
    color: '#CF8B3D',
  },
  arrowIcon: {
    color: '#CF8B3D',
  },
  drawerLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '125%',
    marginLeft: -15,
  },
  drawerItem: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#CF8B3D',
    padding: 10,
    marginBottom: 20,
  },
  labelText: {
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 18,
  },
});

export default styles;
