import {Image, Text, TouchableOpacity, View} from 'react-native';
import {OfferData} from '../../models/dataType/Offer';
import styles from './offer-card-style';
import {userAvatar} from '../../data/ImagesPath';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarWeek} from '@fortawesome/free-solid-svg-icons/faCalendarWeek';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {APP_TEXT} from '../../data/AppText';

type Props = {
  navigation: any;
  data: OfferData;
  photo?: string;
};

const OfferCard = ({navigation, data, photo}: Props) => {
  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          /* TODO : implémenter la logique lorsqu'une offre est sélectionnée */
        }}>
        <View style={styles.serviceNameLine}>
          <Text style={styles.serviceNameText}>{data.service}</Text>
        </View>
        <View style={styles.nameAndAvatar}>
          <Image source={photo || userAvatar} style={styles.avatar} />
          <Text style={styles.clientName}>{data.name}</Text>
        </View>
        <View style={styles.dateLine}>
          <FontAwesomeIcon
            icon={faCalendarWeek}
            size={20}
            style={styles.icon}
          />
          <Text style={styles.simpleText}>{data.date}</Text>
        </View>
        <View style={styles.timeAndCost}>
          <View style={styles.dateLine}>
            <FontAwesomeIcon icon={faClock} size={20} style={styles.icon} />
            <Text style={styles.simpleText}>{data.time}</Text>
          </View>
          <Text>
            {APP_TEXT.offer_card.estimation}
            {data.estimation}
            {APP_TEXT.symbols.dollar_sign}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default OfferCard;
