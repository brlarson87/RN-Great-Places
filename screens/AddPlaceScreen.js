import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { addPlace } from '../store/actions/places';

import Colors from '../constants/Colors';

const AddPlaceScreen = ({navigation}) => {
    const [titleValue, setValueTitle] = useState("");

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setValueTitle(text);
    }

    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue));
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