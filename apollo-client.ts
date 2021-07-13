import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client';

type Query = <QV, RT>(name: string, query: DocumentNode, variables?: QV) => Promise<RT>;
type Mutate = <MV, RT>(name: string, mutation: DocumentNode, variables?: MV) => Promise<RT>;

export type GraphQLClient = {
  query: Query;
  mutate: Mutate;
	client: ApolloClient<any>;
};

export const createGQLClient = (): GraphQLClient => {
  const cache = new InMemoryCache({
    addTypename: false,
    resultCaching: false,
  });

  const client = new ApolloClient({
    // Provide required constructor fields
		uri: "http://localhost:4000",
    cache: cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });

  const query: Query = (_, query, variables) => {
    return client
      .query({
        query,
        variables,
        fetchPolicy: 'no-cache',
      })
      .then((resp) => {
				const {data}  = resp || {};
				return data as any;
			});
  };

  const mutate: Mutate = (name, mutation, variables) => {
    return client
      .mutate({
        mutation,
        variables,
      })
      .then(({ data }) => data[name]);
  };

  return { client, query, mutate };
};

export default createGQLClient();