import * as FileSystem from 'expo-file-system';
export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

import { insertPlace, fetchPlaces } from '../../helpers/db';

export const addPlace = (title, imageUri) => {
    return async dispatch => {
        const fileName = imageUri.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: imageUri,
                to: newPath
            });
           const dbResult = await insertPlace(title, newPath, 'Dummy address', 15.6, 12.8);
           dispatch({ type: ADD_PLACE, payload: { id: dbResult.insertId, title, imageUri: newPath} }); 
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
   
}

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlaces();
            dispatch({ type: SET_PLACES, payload: dbResult.rows._array });
        } catch (error) {
            throw error;
        }
    }
}