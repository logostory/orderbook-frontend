import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// 액션 생성자
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // { index, color }

// 초기 상태를 정의합니다
const initialState = Map({
  counters: List([
    Map({
      color: 'black',
      number: 0,
    }),
  ]),
});

//  handleActions 를 통한 리듀서의 틀

// export default handleActions({
//     [CREATE]: (state, action) => state,
//     [REMOVE]: (state, action) => state,
//     [INCREMENT]: (state, action) => state,
//     [DECREMENT]: (state, action) => state,
//     [SET_COLOR]: (state, action) => state,
// }, initialState);


export default handleActions({
  [CREATE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.push(
      Map({
        color: action.payload,
        number: 0,
      }),
    ));
  },

  [REMOVE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.pop());
  },

  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.update(
      action.payload,
      counter => counter.set('number', counter.get('number') + 1),
    ) );
  },

  [DECREMENT]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.update(
      action.payload,
      counter => counter.set('number', counter.get('number') - 1),
    ) );
  },

  [SET_COLOR]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.update(
      action.payload.index,
      counter => counter.set('color', action.payload.color),
    ) );
  },
}, initialState);


//  기존에 작동하던 카운터를 비동기적으로 작동하도록 코드를 추가
// 테스트용으로 추가한 코드로  App 컴포넌트에서 increment -> incrementAsync, decrement -> decrementAsync 로 치환해서 사용할 수 있습니다.

export const incrementAsync = () => (dispatch) => {
  // 1초 뒤 액션 디스패치
  setTimeout(
    () => { dispatch(increment()); },
    1000,
  );
};

export const decrementAsync = () => (dispatch) => {
  // 1초 뒤 액션 디스패치
  setTimeout(
    () => { dispatch(decrement()); },
    1000,
  );
};
