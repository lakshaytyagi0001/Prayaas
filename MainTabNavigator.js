// Import React Navigation
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  
  import tabBarIcon from './utils/tabBarIcon';
  // Import the screens
  import FeedScreen from './screens/FeedScreen';
  import NewPostScreen from './screens/NewPostScreen';
  import SelectPhotoScreen from './screens/SelectPhotoScreen';
  import SettingsScreen from './screens/SettingsScreen';
  
  // Create our main tab navigator for moving between the Feed and Photo screens
  const navigator = createBottomTabNavigator(
    {
      // The name `Feed` is used later for accessing screens
      Feed: {
        // Define the component we will use for the Feed screen.
        screen: FeedScreen,
        navigationOptions: {
          // Add a cool Material Icon for this screen
          tabBarIcon: tabBarIcon('home'),
        },
      },
      // All the same stuff but for the Photo screen
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
      // We want to hide the labels and set a nice 2-tone tint system for our tabs
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      },
    },
  );
  
  // Create the navigator that pushes high-level screens like the `NewPost` screen.
  const stackNavigator = createStackNavigator(
    {
      Main: {
        screen: navigator,
        // Set the title for our app when the tab bar screen is present
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
  