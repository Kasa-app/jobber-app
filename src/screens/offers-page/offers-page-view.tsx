import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header/header';
import {APP_TEXT} from '../../data/AppText';
import styles from './offers-page-style';
import {OfferData} from '../../models/dataType/Offer';
import OfferCard from '../../components/Offer-card/offer-card';

type Props = {
  navigation: any;
  offersList: any;
};

export const OffersPageView = ({navigation, offersList}: Props) => {
  return (
    <>
      <Header title={APP_TEXT.drawer_items.offres} navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={offersList}
          renderItem={({item}) => (
            <OfferCard navigation={navigation} data={item as OfferData} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
        />
      </SafeAreaView>
    </>
  );
};
