import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllAstrosQuery } from '../queries/queries';

class AstroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  displayAstros() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Magic is coming...</div>;
    } else {
      if (data.AllAstrology) {
        return data.AllAstrology.map(astro => (
          <li
            key={astro.id}
            onClick={() => this.setState({ selected: astro.sign })}
          >
            {astro.sign}
          </li>
        ));
      } else {
        return <h1>loading</h1>;
      }
      // return <h1>loaded</h1>;
    }
  }

  render() {
    console.log('THIS.PROPS.DATA', this.props.data);
    return (
      <div>
        <ul id="astro-list">{this.displayAstros()}</ul>
      </div>
    );
  }
}

export default graphql(getAllAstrosQuery)(AstroList);
