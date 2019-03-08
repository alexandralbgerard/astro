import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllAstrosQuery } from '../queries/queries';

class AstroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayAstros() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Magic is coming...</div>;
    } else {
      return data.AllAstrology.map(astro => (
        <li
          key={astro.id}
          onClick={() => this.setState({ selected: astro.sign })}
        >
          {astro.sign}
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <ul id="astro-list">{this.displayAstros()}</ul>
      </div>
    );
  }
}

export default graphql(getAllAstrosQuery)(AstroList);
