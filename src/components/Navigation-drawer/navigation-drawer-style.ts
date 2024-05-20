import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: -5,
  },
  profileBackground: {
    backgroundColor: '#CF8B3D',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  jobberAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 20,
  },
  fullName: {
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
  },
});

export default styles;
