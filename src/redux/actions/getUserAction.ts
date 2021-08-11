import {
  setUser,
	setUserInProgress,
	setUserError,
} from '../slices/userSlice';
import QUERY_USER from '../../../@types/usersQuery.gql';
import {GraphQLClient} from '@apolloClient'
import { Dispatch } from 'redux'

export const getUser = () => (dispatch: Dispatch, _: any, { client }: {client: GraphQLClient}) => {
  dispatch(setUserInProgress());
  return client
    .query(
      'user', 
      QUERY_USER,
			{userName: "sjmorton"}
    )
    .then((data) => dispatch(setUser(data as any)))
    .catch((e) => dispatch(setUserError(e.message)))
};