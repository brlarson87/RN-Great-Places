import React, { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Platform, FlatList } from 'react-native';

import PlaceItem from '../components/UI/PlaceItem';


import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';

import { loadPlaces } from '../store/actions/places';

const PlacesScreen = ({navigation}) => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlaces());
    }, [dispatch]);

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
      <FlatList 
        data={places} 
        keyExtractor={item => item.id}
        renderItem={itemData => 
            <PlaceItem 
                title={itemData.item.title} 
                address={null} 
                image={itemData.item.imageUri}
                onSelect={() => {
                    navigation.navigate("PlaceDetails", {placeId: itemData.item.id, placeTitle: itemData.item.title})
                }}
            /> 
        }
      />
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
