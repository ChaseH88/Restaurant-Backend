import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
  },
}

new GraphQLServer({ typeDefs, resolvers }).start(() =>
  console.log('Server is running on localhost:4000')
)
