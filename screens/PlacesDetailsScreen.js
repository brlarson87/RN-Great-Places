import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const PlacesDetailsScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.placeTitle
    });
  }, [navigation, route]);
  
  return (
      <View style={styles.screen}>
          <Text>Places Details Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PlacesDetailsScreen;