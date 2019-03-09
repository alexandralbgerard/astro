import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAstroSignQuery } from '../queries/queries';

class AstroDetail extends Component {
  displayAstroDetails() {
    const { AstrologySign } = this.props.data;
    if (AstrologySign) {
      return (
        <div>
          <p>{AstrologySign.dates}</p>
          <p>{AstrologySign.element}</p>
          <p>{AstrologySign.ruler}</p>
          <p>{AstrologySign.stregnths}</p>
          <p>{AstrologySign.weaknesses}</p>
          <p>{AstrologySign.overview}</p>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
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
