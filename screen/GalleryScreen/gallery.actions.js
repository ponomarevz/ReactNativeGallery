const FETCH_IMG_LIST_IS_LOADING = 'GALLERY.FETCH_IMG_LIST_IS_LOADING',
	FETCH_IMG_LIST_SUCCESS = 'GALLERY.FETCH_IMG_LIST_SUCCESS';

const fetchImageListIsLoading = state => {
	return {
		type: FETCH_IMG_LIST_IS_LOADING,
		payload: state
	}
};

const fetchImageListSuccess = images => {
	return {
		type: FETCH_IMG_LIST_SUCCESS,
		payload: images
	}
};

const apiUrl = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

const fetchGalleryImageListAction = () => {
	return dispatch => {
		dispatch(fetchImageListIsLoading(true));

		fetch(apiUrl)
			.then(response => {
				if ( !response.ok ) {
					throw Error(response.statusText);
				}

				dispatch(fetchImageListIsLoading(false));
				return response;
			})
			.then(response => response.json())
			.then(images => dispatch(fetchImageListSuccess(images)))
			.catch(err => console.info('Fetch Images ERROR', err));
	}
};

export {
	FETCH_IMG_LIST_IS_LOADING, FETCH_IMG_LIST_SUCCESS, fetchGalleryImageListAction
};
