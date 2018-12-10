/* Ducks Pattern 예시 */

/* Action Types */
export const BASIC = 'BASIC';

/* Action Creators */
export const doBasic = () => ({
    type: BASIC,
    payload: '',
});

/* Reducer */
export default function reducer(state, action) {
    switch (action.type) {
    case BASIC:
        return { ...state, msg: action.payload };

    default:
        return state;
    }
}

/* Selectors */
export const getBasicMsg = state => state.basic.msg;
