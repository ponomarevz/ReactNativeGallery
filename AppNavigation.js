import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import COLORS from './colors';

import GalleryScreen from './screen/GalleryScreen/GalleryScreen';
import FullImageScreen from './screen/FullImageScreen/FullImageScreen';

const RootStack = createStackNavigator(
	{
		Main: {
			screen: GalleryScreen,
			navigationOptions: () => ({
				title: 'Unsplash gallery'
			})
		},
		FullImageScreen: {
			screen: FullImageScreen,
			navigationOptions: ({ navigation }) => ({
				title: `Image: ${navigation.state.params.imageTitle}`
			})
		},
	},

	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: COLORS.headerBg,
			},
			headerTintColor: COLORS.headerTint
		},
	}
);

const AppNavigation = createAppContainer(RootStack);
export default AppNavigation;
