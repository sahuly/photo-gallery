import {
    GET_PHOTO_GALLERY_REQUEST,
    GET_PHOTO_GALLERY_SUCCESS,
    GET_PHOTO_GALLERY_ERROR
} from './constants'

const initialState = {
    loading: false,
    error: null,
    photoGalleryDetails: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTO_GALLERY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PHOTO_GALLERY_SUCCESS:
                return {
                    ...state,
                    photoGalleryDetails: action.payload,
                    loading: false,
                    error:null
                };
        case GET_PHOTO_GALLERY_ERROR:
            return {
                ...state,
                photoGalleryDetails: {},
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export {initialState, reducer};

export default reducer;