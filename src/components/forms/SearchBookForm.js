import React from 'react';
import axios from 'axios';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchBookForm extends React.Component {
  state = {
    query: '',
    loading: false,
    options: [],
    books: {},
  };

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data.searchQuery,
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({
      loading: true,
    });
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title,
          });
        });
        this.setState({
          loading: false,
          options,
          books: booksHash,
        });
      });
  };

  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search your new book by title"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
