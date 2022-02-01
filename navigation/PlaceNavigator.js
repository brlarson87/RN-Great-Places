import React from 'react';
import { Platform } from 'react-native';

import PlacesScreen from '../screens/PlacesScreen';
import PlacesDetailsScreen from '../screens/PlacesDetailsScreen';
import AddPlaceScreen from '../screens/AddPlaceScreen';
import MapScreen from '../screens/MapScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary 
}

export const PlaceNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Places"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="Places" component={PlacesScreen} />
            <Stack.Screen 
                name="PlaceDetails" 
                component={PlacesDetailsScreen}
                options={{ 
                    title: 'Place Details'
                }} 
            />
            <Stack.Screen 
                name="AddPlace" 
                component={AddPlaceScreen}
                options={{ 
                    title: 'Add New Place'
                  }} 
            />
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
    )
}