import constants from './constants';

export const getPhotoGalleryRequest = () => ({
    type: constants.GET_PHOTO_GALLERY_REQUEST
});

const defaults = {
    getPhotoGalleryRequest
};

export default defaults;