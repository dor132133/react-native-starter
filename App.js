import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/colorScreen';
import ColorEditorScreen from './src/screens/colorEditorScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color: ColorsScreen,
    ColorEditor: ColorEditorScreen,
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React-Native Course"
    }
  }
);

export default createAppContainer(navigator);
