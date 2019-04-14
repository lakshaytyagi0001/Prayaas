import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  
  import tabBarIcon from './utils/tabBarIcon';
  import FeedScreen from './screens/FeedScreen';
  import NewPostScreen from './screens/NewPostScreen';
  import SelectPhotoScreen from './screens/SelectPhotoScreen';
  import SettingsScreen from './screens/SettingsScreen';
  
  const navigator = createBottomTabNavigator(
    {
      Feed: {
        screen: FeedScreen,
        navigationOptions: {
          tabBarIcon: tabBarIcon('home'),
        },
      },
      Photo: {
        screen: SelectPhotoScreen,
        navigationOptions: {
          tabBarIcon: tabBarIcon('add-circle'),
        },
      },
      Setting: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarIcon: tabBarIcon('settings'),
        },
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      },
    },
  );
  
  const stackNavigator = createStackNavigator(
    {
      Main: {
        screen: navigator,
        navigationOptions: { title: 'Prayaas: A Step Towards Change' },
      },
      NewPost: NewPostScreen,
    },
    {
      cardStyle: { backgroundColor: 'white' },
    },
  );
  const Navigation = createAppContainer(stackNavigator);
  export default Navigation;
  