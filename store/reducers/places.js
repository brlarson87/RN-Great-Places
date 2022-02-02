import { ADD_PLACE, SET_PLACES } from "../actions/places";

import Place from "../../models/place";

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_PLACES: 
            return {
                places: payload
            }
        case ADD_PLACE:
            const newPlace = new Place(payload.id.toString(), payload.title, payload.imageUri) 
            return {
                places: state.places.concat(newPlace)
            }
        default: 
            return state;
    }
}