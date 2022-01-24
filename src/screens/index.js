import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreen } from './home';

const Tab = createBottomTabNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Presupuestos"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Presupuestos') {
              iconName = 'folder-open';
            } else if (route.name === 'Productos') {
              iconName = 'list';
            } else {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Presupuestos" component={HomeScreen} />
        <Tab.Screen name="Productos" component={HomeScreen} />
        <Tab.Screen name="Ajustes" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
