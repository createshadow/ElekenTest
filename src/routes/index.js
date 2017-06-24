import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Picture from '../screens/Picture';

export const Tabs = StackNavigator({
    Home: {screen: Home},
    Picture: {screen: Picture}
}, {
    swipeEnabled: true,
    animationEnabled: true
});