import { PureComponent } from 'react';
import { Box } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
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
      // const { hits, total } = await API.getPics(query).then(
      await API.getPics(query)
        .then(({ data, status }) => {
          const { total, hits } = data;

          if (total === 0) {
            return toast.error(
              `Sorry, there are no pictures with search "${query}"`
            );
          }

          if (status !== 200) {
            return toast.error(`Sorry, something went wrong. Try again later`);
          }

          this.setState(() => {
            return { pictures: hits };
          });
        })
        .catch(error => {
          console.log(error.name, error.message);
        });
    }
  }

  onSubmit = searchQuery => {
    const { query } = this.state;

    if (searchQuery === query) {
      return toast.warn('It seems to be the same search');
    }

    this.setState({ page: 1, query: searchQuery });
  };

  render() {
    const { pictures } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>

        <ImageGallery pictures={pictures}></ImageGallery>

        <ToastContainer theme="dark" autoClose={1500} position="top-left" />
      </Box>
    );
  }
}
