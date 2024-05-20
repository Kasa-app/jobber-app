import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './navigation-drawer-style';
import {userAvatar} from '../../data/ImagesPath';

type Props = {
  prenom: string;
  nom: string;
  photo?: string;
};

export const NavigationDrawer = (props, {prenom, nom, photo}: Props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.container}>
        <View style={styles.profileBackground}>
          <Image source={photo || userAvatar} style={styles.jobberAvatar} />
          <Text style={styles.fullName}>
            {/* Valeurs tests */}
            {prenom || 'Prenom'} {nom || 'Nom'}
          </Text>
        </View>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
    </View>
  );
};
