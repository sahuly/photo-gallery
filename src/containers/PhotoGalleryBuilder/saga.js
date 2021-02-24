import {
    GET_PHOTO_GALLERY_REQUEST,
    GET_PHOTO_GALLERY_SUCCESS,
    GET_PHOTO_GALLERY_ERROR
} from './constants'

import {call, put, takeLatest} from 'redux-saga/effects';
import PhotoGalleryService from './service';

export function* getPhotoGalleryDetails() {
    try {
        const data = yield call (PhotoGalleryService.getPhotoGalleryDetails);
        yield put ({
            type: GET_PHOTO_GALLERY_SUCCESS,
            payload: data
        });
    } catch (e) {
        yield put ({
            type: GET_PHOTO_GALLERY_ERROR,
            payload: e
        });
    }
}

export default function* photoGalleryBuilderWatcherSaga() {
    yield takeLatest(GET_PHOTO_GALLERY_REQUEST, getPhotoGalleryDetails)
}