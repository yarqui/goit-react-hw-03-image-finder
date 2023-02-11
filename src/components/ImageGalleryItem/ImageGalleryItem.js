import Modal from 'components/Modal';
import { PureComponent } from 'react';
import { ItemImage } from './ImageGalleryItem.styled';
import { Item } from './ImageGalleryItem.styled';

class GalleryItem extends PureComponent {
  state = {
    isModalOpen: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { pictures } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        {pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <Item key={id} onClick={this.showModal()}>
              <ItemImage id={id} src={webformatURL} alt={tags} />
              {isModalOpen && <Modal src={largeImageURL}></Modal>}
            </Item>
          );
        })}
      </>
    );
  }
}

export default GalleryItem;
