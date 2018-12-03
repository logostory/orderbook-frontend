import { createAction, handleActions } from "redux-actions";

const INITIALIZE = 'cart/INITIALIZE';
export const initialize = createAction(INITIALIZE);

const initialState = {
	tablenum: 1
}

export default handleActions({
	[INITIALIZE]: (state, action) => {initialize()}
}, initialState)
