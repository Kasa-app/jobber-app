import MapView, {Marker} from 'react-native-maps';
import styles from './map-background-style';
import {Image} from 'react-native';
import {mapMarker} from '../../data/ImagesPath';

type Props = {
  initialRegion: any;
  mapStyle: any;
  mapView: React.MutableRefObject<MapView | null>;
  position: any;
};

export const MapBackgroundView = ({
  initialRegion,
  mapStyle,
  mapView,
  position,
}: Props) => {
  return (
    <>
      {initialRegion && (
        <MapView
          customMapStyle={mapStyle}
          style={styles.map}
          initialRegion={initialRegion}
          ref={ref => {
            mapView.current = ref as MapView;
          }}>
          {position && (
            <Marker
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
              style={{
                transform: [
                  {
                    rotate:
                      position.heading === null
                        ? '0deg'
                        : `${position.heading}deg`,
                  },
                ],
              }}>
              <Image style={styles.markerImage} source={mapMarker}></Image>
            </Marker>
          )}
        </MapView>
      )}
    </>
  );
};
