import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: '10%',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  jobberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  jobberAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CF8B3D',
    overflow: 'hidden',
  },
  menuContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notifBox: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    height: '15%',
    backgroundColor: '#CF8B3D',
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  expandedBox: {
    height: '65%',
  },
});

export default styles;
