import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PlacesDetailsScreen = ({navigation}) => {
  return (
      <View style={styles.screen}>
          <Text>Places Details Screen</Text>
          <Button 
            title="Go to Add Place Screen" 
            onPress={() => navigation.navigate('AddPlace')}
          />
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