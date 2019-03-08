const graphql = require('graphql');
const Astrology = require('../postgres/models/Astrology');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} = graphql;

const AstrologyType = new GraphQLObjectType({
  name: 'astrology',
  fields: () => ({
    id: { type: GraphQLID },
    sign: { type: GraphQLString },
    dates: { type: GraphQLString },
    element: { type: GraphQLString },
    ruler: { type: GraphQLString },
    stregnths: { type: GraphQLString },
    weaknesses: { type: GraphQLString },
    overview: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    AstrologySign: {
      type: AstrologyType,
      args: { sign: { type: GraphQLString } },
      resolve(parent, args) {
        return Astrology.findOne({
          where: {
            sign: args.sign,
          },
        });
      },
    },
    AllAstrology: {
      type: new GraphQLList(AstrologyType),
      resolve() {
        return Astrology.findAll();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAstrology: {
      type: AstrologyType,
      args: {
        sign: { type: new GraphQLNonNull(GraphQLString) },
        dates: { type: new GraphQLNonNull(GraphQLString) },
        element: { type: new GraphQLNonNull(GraphQLString) },
        ruler: { type: new GraphQLNonNull(GraphQLString) },
        stregnths: { type: new GraphQLNonNull(GraphQLString) },
        weaknesses: { type: new GraphQLNonNull(GraphQLString) },
        overview: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let sign = new Astrology({
          sign: args.sign,
          dates: args.dates,
          element: args.element,
          ruler: args.ruler,
          stregnths: args.stregnths,
          weaknesses: args.weaknesses,
          overview: args.overview,
        });
        return sign.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
