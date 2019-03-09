import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AstroList from './components/AstroList';
import AddAstro from './components/AddAstro';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Astro</h1>
          <AstroList />
          <AddAstro />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
