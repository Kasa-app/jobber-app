import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native';
import {NavigationDrawer} from '../../components/Navigation-drawer/navigation-drawer';
import {APP_TEXT} from '../../data/AppText';
import HomePage from '../../screens/home-page/home-page';
import styles from './drawer-container-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faLandmark} from '@fortawesome/free-solid-svg-icons/faLandmark';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons/faCalendarCheck';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons/faBriefcase';
import {faFolder} from '@fortawesome/free-solid-svg-icons/faFolder';
import {faClipboard} from '@fortawesome/free-solid-svg-icons/faClipboard';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import OffersPage from '../../screens/offers-page/offers-page';
import {faHandshakeAngle} from '@fortawesome/free-solid-svg-icons/faHandshakeAngle';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: styles.drawer,
          drawerItemStyle: styles.drawerItem,
        }}
        drawerContent={props => <NavigationDrawer {...props} />}>
        <Drawer.Screen
          name={'homePageScreen'}
          component={HomePage}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.messages}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.messages}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faEnvelope}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.offres}
          component={OffersPage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.offres}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faHandshakeAngle}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.revenus}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.revenus}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faLandmark}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.dispos}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.dispos}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.competences}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.competences}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faBriefcase}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.travaux}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.travaux}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faClipboard}
                style={styles.icons}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.documents}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.documents}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon icon={faFolder} style={styles.icons} size={32} />
            ),
          }}
        />
        <Drawer.Screen
          name={APP_TEXT.drawer_items.compte}
          component={HomePage}
          options={{
            drawerLabel: () => (
              <View style={styles.drawerLabel}>
                <Text style={styles.labelText}>
                  {APP_TEXT.drawer_items.compte}
                </Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.arrowIcon}
                  size={24}
                />
              </View>
            ),
            drawerIcon: () => (
              <FontAwesomeIcon icon={faGear} style={styles.icons} size={32} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerContainer;
