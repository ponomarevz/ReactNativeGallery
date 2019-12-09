const FETCH_IMG_LIST_IS_LOADING = 'GALLERY.FETCH_IMG_LIST_IS_LOADING',
  FETCH_IMG_LIST_SUCCESS = 'GALLERY.FETCH_IMG_LIST_SUCCESS';

const fetchImageListIsLoading = state => {
  return {
    type: FETCH_IMG_LIST_IS_LOADING,
    payload: state,
  };
};

const fetchImageListSuccess = images => {
  return {
    type: FETCH_IMG_LIST_SUCCESS,
    payload: images,
  };
};

const apiUrl =
  'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

const prepareImageList = rawImageList => {
  return rawImageList.map(imageInfo => ({
    id: imageInfo.id,
    title: imageInfo.description || imageInfo.alt_description || 'No any title',
    likes: imageInfo.likes,
    author: `${imageInfo.user.first_name} ${imageInfo.user.last_name}`,
    thumbUrl: imageInfo.urls.thumb,
    fullImageUrl: imageInfo.urls.full,
  }));
};

const fetchGalleryImageListAction = () => {
  return dispatch => {
    dispatch(fetchImageListIsLoading(true));

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(fetchImageListIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(images => dispatch(fetchImageListSuccess(prepareImageList(images))))
      .catch(err => console.info('Fetch Images ERROR', err));
  };
};

export {
  FETCH_IMG_LIST_IS_LOADING,
  FETCH_IMG_LIST_SUCCESS,
  fetchGalleryImageListAction,
};
