import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addAstroMutation, getAllAstrosQuery } from '../queries/queries';
import '../../src/index.css';

class AddAstro extends Component {
  constructor() {
    super();
    this.state = {
      sign: '',
      dates: '',
      element: '',
      ruler: '',
      stregnths: '',
      weaknesses: '',
      overview: '',
    };
  }

  submitForm(evt) {
    evt.preventDefault();
    this.props.addAstroMutation({
      variables: {
        sign: this.state.sign,
        dates: this.state.dates,
        element: this.state.element,
        ruler: this.state.ruler,
        stregnths: this.state.stregnths,
        weaknesses: this.state.weaknesses,
        overview: this.state.overview,
      },
      refetchQueries: [{ query: getAllAstrosQuery }],
    });
  }

  render() {
    return (
      <form id="formastro" onSubmit={this.submitForm.bind(this)}>
        <p>Summon a Sign:</p>
        <div className="field">
          <label>Sign:</label>
          <input
            type="text"
            onChange={evt => this.setState({ sign: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Dates:</label>
          <input
            type="text"
            onChange={evt => this.setState({ dates: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Element:</label>
          <input
            type="text"
            onChange={evt => this.setState({ element: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Ruler:</label>
          <input
            type="text"
            onChange={evt => this.setState({ ruler: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Stregnths:</label>
          <input
            type="text"
            onChange={evt => this.setState({ stregnths: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Weaknesses:</label>
          <input
            type="text"
            onChange={evt => this.setState({ weaknesses: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Overview:</label>
          <input
            type="text"
            onChange={evt => this.setState({ overview: evt.target.value })}
          />
        </div>

        <button type="submit">summon</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAllAstrosQuery, { name: 'getAllAstrosQuery' }),
  graphql(addAstroMutation, { name: 'addAstroMutation' })
)(AddAstro);
