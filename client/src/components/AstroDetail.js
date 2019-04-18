import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAstroSignQuery } from '../queries/queries';
import '../../src/index.css';

class AstroDetail extends Component {
  displayAstroDetails() {
    const { AstrologySign } = this.props.data;
    if (AstrologySign) {
      return (
        <div>
          <h2>{AstrologySign.sign}</h2>
          <p className="bold">{AstrologySign.dates}</p>
          <p>
            <b>Element:</b> {AstrologySign.element}
          </p>
          <p>
            <b>Ruler:</b> {AstrologySign.ruler}
          </p>
          <p className="bold">Stregnths:</p>
          <p>{AstrologySign.stregnths}</p>
          <p className="bold">Weaknesses:</p>
          <p>{AstrologySign.weaknesses}</p>
          <p className="bold">Overview:</p>
          <p>{AstrologySign.overview}</p>
        </div>
      );
    } else {
      return <div>Select a sign...</div>;
    }
  }
  render() {
    return <div id="astro-details">{this.displayAstroDetails()}</div>;
  }
}

export default graphql(getAstroSignQuery, {
  options: props => {
    return {
      variables: {
        sign: props.sign,
      },
    };
  },
})(AstroDetail);
