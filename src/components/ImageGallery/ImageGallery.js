import { Gallery } from './ImageGallery.styled';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures }) => {
  return (
    <Gallery>
      <GalleryItem pictures={pictures}></GalleryItem>
    </Gallery>
  );
};

export default ImageGallery;
