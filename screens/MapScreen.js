import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = ({navigation}) => {
    const [selectedLocation, setSelectedLocation] = useState();
    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const selectLocationHandler = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    let markerCoordinates;

    if(selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

  return (
      <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler}>
          {markerCoordinates && <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>}
      </MapView>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        flex: 1
    }
});

export default MapScreen;