import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@redux/store'

// Define a type for the slice state
export interface UserState {
  profile?: Profile
	status: string
	loggedIn: boolean
}

export interface Profile {
	email: string,
	userName: string,
	name: string,
	accounts: Account[]
}

interface Account {
	profileImage: string,
	name: string
}

// Define the initial state using that type
const initialState: UserState = {
  status: "INITIAL",
	loggedIn: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<{profile: Profile}>) => 
			({...state, ...{profile: action.payload.profile}, ...{loggedIn: true, status: 'LOGGED_IN'}}),
		setUserInProgress: (state) => {
			state.status = "LOGGING_IN"
		},
		setUserError: (state, action: PayloadAction<string>) => {
			state.status = "LOGINN_ERROR" + action.payload
		}
  }
})

export const { setUser, setUserInProgress, setUserError } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer