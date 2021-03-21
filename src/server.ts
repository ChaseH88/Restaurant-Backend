import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

export default new GraphQLServer({
  typeDefs: [
    "src/schema.graphql"
  ],
  resolvers,
  context: ({ req, res, ...rest }: any) => ({
    req,
    res,
    userId: req?.headers?.userid
  })
});
