import React from 'react';
import styles from './home-page-style';
import {View, Image, TouchableOpacity} from 'react-native';
import {userAvatar} from '../../data/ImagesPath';
import {SearchButton} from '../../components/Search-button/search-button';
import {MenuButton} from '../../components/Menu-button/menu-button';
import {MapBackground} from '../../components/Map/map-background';
import AddressInput from '../../components/AddressInput/address-input';

type Props = {
  photo?: string;
  handleMenuPress: () => void;
  handleSearchPress: () => void;
  handleExpandPress: () => void;
  navigation: any;
  isExpanded: boolean;
  isSearchActive: boolean;
};

export const HomePageView = ({
  photo,
  handleMenuPress,
  handleSearchPress,
  handleExpandPress,
  isExpanded,
  isSearchActive,
}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <MapBackground />
        <View style={styles.jobberContainer}>
          <Image source={photo || userAvatar} style={styles.jobberAvatar} />
        </View>
        <View style={styles.menuContainer}>
          <MenuButton handlePress={handleMenuPress}></MenuButton>
        </View>
        <TouchableOpacity
          onPress={handleExpandPress}
          style={[styles.notifBox, isExpanded && styles.expandedBox]}>
          <View>
            {!isSearchActive ? (
              <SearchButton handlePress={handleSearchPress} />
            ) : null}
          </View>
          {isExpanded && isSearchActive ? <AddressInput /> : null}
        </TouchableOpacity>
      </View>
    </>
  );
};
