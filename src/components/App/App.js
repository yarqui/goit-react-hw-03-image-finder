import { PureComponent } from 'react';
import { Box } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import * as API from 'services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends PureComponent {
  state = {
    page: 1,
    query: '',
    isLoading: false,
    pictures: [],
  };

  // componentDidMount() {
  // }

  async componentDidUpdate(_, prevState) {
    console.log('componentDidUpdate');
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      const { hits } = await API.getPics(query);

      this.setState(() => {
        return { pictures: hits };
      });
    }
  }

  handleSubmit = searchQuery => {
    const { query } = this.state;

    if (searchQuery === query) {
      return toast.warn('It seems to be the same search');
    }

    this.setState({ query: searchQuery });
  };

  handleImgZoom = () => {};

  render() {
    const { pictures } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>

        <ImageGallery pictures={pictures}></ImageGallery>

        <ToastContainer theme="dark" autoClose={1500} position="top-left" />
        <Modal></Modal>
      </Box>
    );
  }
}
