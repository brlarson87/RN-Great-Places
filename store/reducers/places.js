import { ADD_PLACE } from "../actions/places";

import Place from "../../models/place";

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(), payload) 
            return {
                places: state.places.concat(newPlace)
            }
        default: 
            return state;
    }
}