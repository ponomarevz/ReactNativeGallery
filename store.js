import { combineReducers } from 'redux';
import galleryReducer from './screen/GalleryScreen/gallery.reducer';

const appReducer = combineReducers({
	gallery: galleryReducer
});

export default appReducer;
