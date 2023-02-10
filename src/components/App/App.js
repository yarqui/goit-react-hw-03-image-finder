import { PureComponent } from 'react';
import { Box } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar';

import ImageGallery from 'components/ImageGallery';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import * as API from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends PureComponent {
  state = {
    page: 1,
    query: '',
    isLoading: false,
  };

  // componentDidMount() {
  // }

  // componentDidUpdate() {
  //   console.log('pics:', pics);
  //   //
  // }

  handleSubmit = searchQuery => {
    console.log('searchQuery:', searchQuery);
  };

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>

        <ImageGallery>
          <GalleryItem></GalleryItem>
        </ImageGallery>
        <ToastContainer />
      </Box>
    );
  }
}
