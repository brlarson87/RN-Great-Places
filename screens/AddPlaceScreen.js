import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from 'react-native';


import { addPlace } from '../store/actions/places';
import ImagePicker from '../components/UI/ImagePicker';
import LocationPicker from '../components/UI/LocationPicker';

import Colors from '../constants/Colors';

const AddPlaceScreen = ({navigation}) => {
    const [titleValue, setValueTitle] = useState("");
    const [pickedImage, setPickedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setValueTitle(text);
    }

    const imageTakenHandler = image => {
        setPickedImage(image);
    }

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
    }, []);

    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue, pickedImage, selectedLocation));
        navigation.navigate('Places');
    }
  return (
      <ScrollView>
          <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.textInput}
              value={titleValue}
              onChangeText={titleChangeHandler}
            />
            <ImagePicker onImageTaken={imageTakenHandler}/>
            <LocationPicker navigation={navigation} onLocationPicked={locationPickedHandler}/>
            <Button 
                title="Save Place" 
                color={Colors.primary} 
                onPress={savePlaceHandler}
            />
          </View>
          
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default AddPlaceScreen;