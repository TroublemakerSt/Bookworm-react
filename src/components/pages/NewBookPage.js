import React from 'react';
import { Segment } from 'semantic-ui-react';

class NewBookPage extends React.Component {
  state = {
    book: null,
  };

  render() {
    return (
      <Segment>
        <h1>Add your new book</h1>
      </Segment>
    );
  }
}

export default NewBookPage;
