import GalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
  return (
    <Gallery>
      <GalleryItem pictures={pictures}></GalleryItem>
    </Gallery>
  );
};

export default ImageGallery;
