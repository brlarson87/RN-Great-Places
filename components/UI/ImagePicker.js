import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import Colors from '../../constants/Colors';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if(status !== 'granted') {
      Alert.alert("Not granted", "You need to grant camera permissions", 
      [{text: "Okay"}]);``
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const result = await verifyPermissions();
    if(!result) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5
    });

    if(!image.cancelled) {
      setPickedImage(image.uri);
      props.onImageTaken(image.uri);
    }
    
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? 
        <Text>No Image picked Yet</Text>
        :
        <Image style={styles.image} source={{ uri: pickedImage}}/>
        }
      </View>
      <Button 
        title="Take Image" 
        color={Colors.primary} 
        onPress={takeImageHandler}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgPicker;
