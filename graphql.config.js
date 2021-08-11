// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: ["@types/schema.gql"],
      documents: ["**/*.{gql,js,ts,jsx,tsx}"],
      extensions: {
        endpoints: {
          default: {
            url: "http://localhost:4000",
          },
        },
      }
    },
  },
}