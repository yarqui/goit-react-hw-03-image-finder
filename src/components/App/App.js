import { PureComponent } from 'react';
import { Box } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar';

import ImageGallery from 'components/ImageGallery';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import * as API from 'services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends PureComponent {
  state = {
    page: 1,
    query: '',
    isLoading: false,
  };

  // componentDidMount() {
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // this.handleRender();
  }

  // handleRender = () => {
  //   const { query } = this.state;

  //   const pictures = API.getPics(query).then(({ hits }) => {
  //     console.log('hits:', hits);
  //   });
  // };

  handleSubmit = searchQuery => {
    const { query } = this.state;

    if (searchQuery === query) {
      return toast.warn('It seems to be the same search');
    }

    //!!!!!!!!!!!!!!!!!!!!!!
    // МОЖЛИВО ПЕРЕД СЕТСТЕЙТОМ КВЕРІ ,СЛІД ЗРОБИТИ ФЕТЧ, ОТРИМАТИ ХІТС, І ВЖЕ РАХОМ ЗАПИСАТИ В СТЕЙТ ХІТС ТА КВЕРІ
    //!!!!!!!!!!!!!!!!!!

    this.setState({ query: searchQuery });
  };

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>

        <ImageGallery>
          <GalleryItem></GalleryItem>
        </ImageGallery>
        <ToastContainer theme="dark" autoClose={1500} position="top-left" />
      </Box>
    );
  }
}
