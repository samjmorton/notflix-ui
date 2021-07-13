import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducers from '@redux/slices/reducers'
import { createGQLClient } from '@apolloClient';
import thunk from 'redux-thunk';
import { UserState } from './slices/userSlice';

let store: any

export interface IStoreProps {
	user: UserState
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

function initStore(initialState: IStoreProps) {
  return createStore(
    reducers,
		initialState,
		applyMiddleware(
			thunk.withExtraArgument({ client:  createGQLClient() })
		)
  )
}

export const initializeStore = (preloadedState: IStoreProps) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: IStoreProps) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
