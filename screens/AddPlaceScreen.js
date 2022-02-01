import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AddPlaceScreen = ({navigation}) => {
  return (
      <View style={styles.screen}>
          <Text>Add Place Screen</Text>
          <Button 
            title="Go to Details Screen" 
            onPress={() => navigation.navigate('Map')}
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

export default AddPlaceScreen;