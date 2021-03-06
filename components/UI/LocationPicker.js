import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

import * as Location from 'expo-location';
import MapPreview from './MapPreview';


const LocationPicker = ({ navigation, route, onLocationPicked }) => {
    const [pickedLocation, setPickedLocation] = useState(); 
    const [isFetching, setIsFetching] = useState(false); 

    const mapPickedLocation = route.params
    ? route.params.pickedLocation
    : null;

    useEffect(() => {
        if(mapPickedLocation) {
            setPickedLocation(mapPickedLocation);
            onLocationPicked(mapPickedLocation);
        }
    }, [mapPickedLocation, onLocationPicked]);

    const verifyPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            Alert.alert("Not granted", "You need to grant location permissions", 
            [{text: "Okay"}]);``
            return false;
          }
      
          return true;
    }
    const getLocationHandler = async () => {
      const hasPermission = await verifyPermissions() ;
      if(!hasPermission) {
          return;
      }

      
      try {
        setIsFetching(true);
        const location = await Location.getCurrentPositionAsync({});
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
        onLocationPicked({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
      } catch (error) {
          Alert.alert('could not fetch location', 'Please try again later or pick a location on the map', [{text: 'Okay'}]);
      }
      setIsFetching(false);
      
    }

    const pickOnMapHandler = () => {
        navigation.navigate('Map');
    }


  return (
      <View style={styles.locationPicker}> 
          <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={pickOnMapHandler}>
            
              {isFetching ? <ActivityIndicator size='large' color={Colors.primary} /> : <Text>No Location selected yet</Text>}
             
          </MapPreview>
          <View style={styles.actions}>
            <Button 
                title="Get User Location" 
                color={Colors.primary} 
                onPress={getLocationHandler}
            />
            <Button 
                title="Pick on Map" 
                color={Colors.primary} 
                onPress={pickOnMapHandler}
            />
          </View>
          
      </View>
  )
};

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default LocationPicker;
