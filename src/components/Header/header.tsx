import styles from './header-style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {backButton} from '../../data/ImagesPath';
import {Screen} from '../../data/Screen';
import useNavigation from '../../hooks/useNavigation';
import Svg, {Path} from 'react-native-svg';

type Props = {
  navigation: any;
  back?: string | null;
  backRoute?: string;
  title: string;
};

const Header = ({
  navigation,
  back = null,
  backRoute = Screen.homePage,
  title,
}: Props) => {
  const {navigateToScreen} = useNavigation(navigation);

  const setBackStep = () => {
    if (back != null) navigation.goBack();
    else navigateToScreen(backRoute);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Svg height={160} width="100%" viewBox="0 0 1440 320">
          <Path
            fill="#CF8B3D"
            fill-opacity="1"
            d="M0,224L120,229.3C240,235,480,245,720,224C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
          <View style={styles.centerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Svg>
        <TouchableOpacity onPress={setBackStep} style={styles.backButton}>
          <Image source={backButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
