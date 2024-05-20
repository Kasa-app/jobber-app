import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './address-input-styles';
import {actions} from '../../redux/map/mapSlice';
import {AppDispatch} from '../../redux/store';
//import { GOOGLE_CONFIG } from "../../../app-config";

const AddressInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentRegion = useSelector((state: any) => state.map.currentRegion);
  const {setCurrentRegion} = actions;

  //TEMPORAIRE
  const GOOGLE_CONFIG = {
    apiKey: 'AIzaSyBHGtH3lIN4_L4IaXxdD7eFpNv0fV4sMfU',
  };

  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        styles={styles}
        disableScroll={true}
        fetchDetails={true}
        placeholder="Entrez une adresse"
        enablePoweredByContainer={false}
        query={{key: GOOGLE_CONFIG.apiKey}}
        onPress={(data, details) => {
          console.log(details?.geometry.location);
          const region = {
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          };
          dispatch(setCurrentRegion(region));
        }}
      />
    </SafeAreaView>
  );
};

export default AddressInput;
