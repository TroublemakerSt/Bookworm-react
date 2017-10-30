import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';

class NewBookPage extends React.Component {
  state = {
    book: null,
  };

  render() {
    return (
      <Segment>
        <h1>Add your new book</h1>
        <SearchBookForm />
      </Segment>
    );
  }
}

export default NewBookPage;
