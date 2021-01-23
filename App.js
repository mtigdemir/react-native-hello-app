import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen, List } from './List';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'code' : 'cached';
          } else if (route.name === 'Search') {
            iconName = focused ? 'anchor' : 'account_box';
          }else if (route.name === 'List'){
            iconName = focused ? 'nav-icon-list' : 'list';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
          <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'GMJ', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MyTabs />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}