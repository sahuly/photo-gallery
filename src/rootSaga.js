import { all } from 'redux-saga/effects';
import { photoGalleryBuilderWatcherSaga as photoGalleryBuilderSaga} from './containers/PhotoGalleryBuilder';

export default function* rootSaga() {
    yield all ([photoGalleryBuilderSaga()]);
}