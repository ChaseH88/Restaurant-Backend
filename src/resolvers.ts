export default {
  Query: {

    // For Testing
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,

  }
}