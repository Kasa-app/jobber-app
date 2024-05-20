import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 25,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: '#CF8B3D',
    borderBottomColor: '#CF8B3D',
  },
  serviceNameLine: {
    alignSelf: 'center',
  },
  serviceNameText: {
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    color: '#CF8B3D',
    fontSize: 16,
  },
  nameAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  clientName: {
    paddingHorizontal: 20,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'orange',
  },
  dateLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timeAndCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#E67918',
  },
  simpleText: {
    paddingLeft: 15,
  },
});

export default styles;
