import counter from './counterSlice';
import user from './userSlice';
import { combineReducers } from 'redux'

export default combineReducers({
	counter,
	user,
});
