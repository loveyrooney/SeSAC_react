const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

//id값 안정화를 위한 방법. 다른 방법으로도 가능함
let counts = initState.list.length;
initState['nextID'] = counts;

//action type and function : 리듀서에 다른 루트로 접근 불가. 여기서 지정한 함수로만 컨트롤할 수 있게.
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload, //req.body같은 느낌임
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//reducer
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state, //state변경 전에 기존 객체 그대로 리턴해 주기위한 전개연산자
        list: state.list.concat({
          //push와 concat의 차이는, push는 추가된 배열의 length를 리턴해주고 concat은 추가된 배열자체를 줌
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
