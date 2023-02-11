import { Gallery } from './ImageGallery.styled';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

// const ImageGallery = ({ pictures }) => {
//   return (
//     <Gallery>
//       {pictures.map(picture => {
//         return <GalleryItem image={picture} />;
//       })}
//     </Gallery>
//   );
// };

const ImageGallery = ({ pictures }) => {
  return (
    <Gallery>
      <GalleryItem pictures={pictures}></GalleryItem>
    </Gallery>
  );
};

export default ImageGallery;
