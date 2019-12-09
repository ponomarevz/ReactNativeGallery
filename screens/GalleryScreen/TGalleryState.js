import type TImageInfo from './TImageInfo';

type TGalleryState = {
  +galleryImageList: Array<TImageInfo>,
  +isLoading: boolean,
};

export default TGalleryState;
