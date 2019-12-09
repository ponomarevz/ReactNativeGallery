import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import COLORS from './colors';

import GalleryScreen from 'screens/GalleryScreen/GalleryScreen';
import FullImageScreen from 'screens/FullImageScreen/FullImageScreen';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: GalleryScreen,
      navigationOptions: () => ({
        title: 'Unsplash gallery',
      }),
    },
    FullImageScreen: {
      screen: FullImageScreen,
      navigationOptions: ({navigation}) => ({
        title: `Image: ${navigation.state.params.imageTitle}`,
      }),
    },
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.headerBg,
      },
      headerTintColor: COLORS.headerTint,
    },
  },
);

const AppNavigation = createAppContainer(RootStack);
export default AppNavigation;
