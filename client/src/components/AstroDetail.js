import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import { getAstroSignQuery } from '../queries/queries';

export default class AstroDetail extends Component {
  displayAstroDetails() {
    console.log('THIS.PROPS.SIGN', this.props.sign);
    return (
      <Query query={getAstroSignQuery} variables={{ sign: this.props.sign }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          console.log('DATA', data);
          const { AstrologySign } = data;

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
        }}
      </Query>
    );
  }
  render() {
    return <div id="astro-details">{this.displayAstroDetails()}</div>;
  }
}

// export default graphql(getAstroSignQuery, {
//   options: props => {
//     return {
//       variables: {
//         sign: props.sign,
//       },
//     };
//   },
// })(AstroDetail);
