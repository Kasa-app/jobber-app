import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../../constants/mapStyle.json';
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import {MapBackgroundView} from './map-background-view';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../redux/map/mapSlice';
import {AppDispatch} from '../../redux/store';

export const MapBackground = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mapView = React.useRef<MapView | null>(null);

  const [initialRegion, setInitialRegion] = useState<any | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);

  const currentLocation = useSelector(
    (state: any) => state.map.currentLocation,
  );
  const currentRegion = useSelector((state: any) => state.map.currentRegion);

  const {setCurrentLocation} = actions;

  useEffect(() => {
    const getLocation = async () => {
      const permission = await requestLocationPermission();
      if (!permission) return;
      getInitialPosition();
      watchPosition();
    };

    getLocation();
  }, []);

  // Hook pour changer la position de la map lorsqu'une adresse est sélectionnée dans la bar de recherche
  useEffect(() => {
    mapView.current?.animateToRegion(
      {
        latitude: currentRegion.latitude,
        longitude: currentRegion.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000,
    );
  }, [currentRegion]);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Partagez votre position?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  };

  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        position => {
          const pos = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            heading: position.coords.heading,
          };

          dispatch(setCurrentLocation(pos));
          mapView.current?.animateToRegion(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            },
            1000,
          );
        },
        error => {},
        {enableHighAccuracy: true, interval: 500, distanceFilter: 1},
      );
      setSubscriptionId(watchID);
    } catch (error) {}
  };

  function getInitialPosition() {
    Geolocation.getCurrentPosition(
      position => {
        setInitialRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      },
      error => {},
      {enableHighAccuracy: true, interval: 500, distanceFilter: 1},
    );
  }

  return (
    <>
      <MapBackgroundView
        initialRegion={initialRegion}
        mapStyle={mapStyle}
        mapView={mapView}
        position={currentLocation}
      />
    </>
  );
};
