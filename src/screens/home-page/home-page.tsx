import {useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {HomePageView} from './home-page-view';
import React from 'react';

const HomePage = ({navigation}: any) => {
  // Pour navigation future :
  //const {navigateToScreen} = useNavigation(navigation);
  //const dispatch = useDispatch<AppDispatch>();

  if (navigation == null) console.log('no nav');

  const [isExpanded, setExpanded] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleExpandPress = () => {
    if (isExpanded && isSearchActive) {
      setSearchActive(!isSearchActive);
    }
    setExpanded(!isExpanded);
  };

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleSearchPress = () => {
    if (!isSearchActive && !isExpanded) {
      setExpanded(!isExpanded);
    }
    setSearchActive(!isSearchActive);
  };

  return (
    <>
      <HomePageView
        navigation={navigation}
        handleMenuPress={handleMenuPress}
        handleSearchPress={handleSearchPress}
        handleExpandPress={handleExpandPress}
        isExpanded={isExpanded}
        isSearchActive={isSearchActive}
      />
    </>
  );
};

export default HomePage;
