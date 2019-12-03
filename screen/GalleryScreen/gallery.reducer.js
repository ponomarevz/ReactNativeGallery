import {
	FETCH_IMG_LIST_IS_LOADING, FETCH_IMG_LIST_SUCCESS
} from './gallery.actions';

const initialState = {
	galleryImageList: [],
};

export default (inState = initialState, action) => {
	const mutateState = { ...inState };

	if ( action.type === FETCH_IMG_LIST_IS_LOADING ) {
		mutateState.isLoading = action.payload;
	}

	if ( action.type === FETCH_IMG_LIST_SUCCESS ) {
		mutateState.galleryImageList = action.payload;
	}

	return mutateState;
};
