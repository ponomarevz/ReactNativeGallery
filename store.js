import {combineReducers} from 'redux';
import galleryReducer from 'screens/GalleryScreen/gallery.reducer';

const appReducer = combineReducers({
  gallery: galleryReducer,
});

export default appReducer;
