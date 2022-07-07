import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import CreatePosts from '../screens/CreatePosts';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CreatePosts') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#15193c',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePosts" component={CreatePosts} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;