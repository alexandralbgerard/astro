import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllAstrosQuery } from '../queries/queries';
import AstroDetail from './AstroDetail';
import '../../src/index.css';

class AstroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayAstros() {
    let data = this.props.data;

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
      return <h1>Magic is coming...</h1>;
    }
  }

  render() {
    console.log('THIS.PROPS.DATA', this.props.data);
    return (
      <div id="allastro">
        <ul id="astro-list">{this.displayAstros()}</ul>
        {this.state.selected && <AstroDetail sign={this.state.selected} />}
      </div>
    );
  }
}

export default graphql(getAllAstrosQuery)(AstroList);
