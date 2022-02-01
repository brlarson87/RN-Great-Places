import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';

const PlacesScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Add Place"
                        iconName={Platform.OS === 'android' ? "md-add" : "ios-add"}
                        onPress={() => navigation.navigate('AddPlace')}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation]);

  return (
      <View style={styles.screen}>
          <Text>Places Screen</Text>
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

export default PlacesScreen;
