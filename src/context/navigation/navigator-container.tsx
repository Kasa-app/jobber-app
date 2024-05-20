import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerContainer from './drawer-container';

const Stack = createNativeStackNavigator();

function Root() {
  return DrawerContainer();
}

export const NavigatorContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
          animationDuration: 200,
        }}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="LaunchScreen" component={LaunchPage} />
        <Stack.Screen name="StartupScreen" component={StartupPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
