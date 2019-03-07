const graphql = require('graphql');
const Astrology = require('../postgres/models/Astrology');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

const AstrologyType = new GraphQLObjectType({
  name: 'Astrology',
  fields: () => ({
    id: { type: GraphQLID },
    sign: { type: GraphQLString },
    dates: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    AstrologySign: {
      type: AstrologyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Astrology.findById(args.id);
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
      },
      resolve(parent, args) {
        let sign = new Astrology({
          sign: args.sign,
          dates: args.dates,
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
