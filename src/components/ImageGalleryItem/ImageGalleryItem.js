import { Item, ItemImage } from './ImageGalleryItem.styled';

const GalleryItem = ({ pictures }) =>
  pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <Item key={id}>
        <ItemImage src={webformatURL} alt={tags} />
      </Item>
    );
  });

export default GalleryItem;
