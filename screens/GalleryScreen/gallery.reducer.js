import {
  FETCH_IMG_LIST_IS_LOADING,
  FETCH_IMG_LIST_SUCCESS,
} from './gallery.actions';
import type TGalleryState from './TGalleryState';

const initialState: TGalleryState = {
  galleryImageList: [],
  isLoading: false,
};

export default (inState = initialState, action) => {
  const mutateState = {...inState};

  switch (action.type) {
    case FETCH_IMG_LIST_IS_LOADING: {
      mutateState.isLoading = action.payload;
      break;
    }
    case FETCH_IMG_LIST_SUCCESS: {
      mutateState.galleryImageList = action.payload;
      break;
    }
  }

  return mutateState;
};
