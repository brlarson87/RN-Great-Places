import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

import * as Location from 'expo-location';
import MapPreview from './MapPreview';


const LocationPicker = () => {
    const [pickedLocation, setPickedLocation] = useState(); 
    const [isFetching, setIsFetching] = useState(false); 

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
      const hasPermission = verifyPermissions() ;
      if(!hasPermission) {
          return;
      }

      
      try {
        setIsFetching(true);
        const location = await Location.getCurrentPositionAsync({});
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
      } catch (error) {
          Alert.alert('could not fetch location', 'Please try again later or pick a location on the map', [{text: 'Okay'}]);
      }
      setIsFetching(false);
      
    }


  return (
      <View style={styles.locationPicker}> 
          <MapPreview style={styles.mapPreview} location={pickedLocation}>
            
              {isFetching ? <ActivityIndicator size='large' color={Colors.primary} /> : <Text>No Location selected yet</Text>}
             
          </MapPreview>
          <Button title="Get User Location" color={Colors.primary} onPress={getLocationHandler}/>
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
    }
});

export default LocationPicker;
