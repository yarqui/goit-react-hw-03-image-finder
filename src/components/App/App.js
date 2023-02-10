import { PureComponent } from 'react';
import { Layout } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar';

export default class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Searchbar></Searchbar>
        This is our app
      </Layout>
    );
  }
}
