import { gql } from 'apollo-boost';

const getAllAstrosQuery = gql`
  {
    AllAstrology {
      sign
      dates
    }
  }
`;

const getAstroSignQuery = gql`
  query GetAstrologySign($sign: String) {
    AstrologySign(sign: $sign) {
      sign
      dates
      element
      ruler
      stregnths
      weaknesses
      overview
    }
  }
`;

const addAstroMutation = gql`
  mutation AddAstro(
    $sign: String!
    $dates: String!
    $element: String!
    $ruler: String!
    $stregnths: String!
    $weaknesses: String!
    $overview: String!
  ) {
    addAstrology(
      sign: $sign
      dates: $dates
      element: $element
      ruler: $ruler
      stregnths: $stregnths
      weaknesses: $weaknesses
      overview: $overview
    ) {
      sign
      dates
      element
      ruler
      stregnths
      weaknesses
      overview
    }
  }
`;

export { getAllAstrosQuery, getAstroSignQuery, addAstroMutation };
