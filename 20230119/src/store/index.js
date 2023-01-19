//redux 통합 관리 : 모듈들의 리듀서 한번에 통합
import { combineReducers } from 'redux';
import todo from './modules/todo';

export default combineReducers({
  todo,
});
